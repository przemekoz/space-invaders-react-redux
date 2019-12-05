import { GameClassRenderInterface, GameInterface, ElemenInterfaceOrNull } from "../types";
import { ElementClass } from "../../element/classes";
import { ElementInterface, ElementTypeEnum, ElementMoveDirection } from "../../element/types";
import { LevelClassInterface } from "../../level/types";
import { ElementEnemyClass } from "../../elementEnemy/classes";
import { UNIT } from "../config/levels";

/*
 *
 *   0,0  1,0  1,  0,3  0,4
 *   0,1  1,1  1,2  1,3  1,4
 *   ...
 */


interface Params {
    levels: LevelClassInterface[]
}

export class GameClass implements GameInterface {
    private maxX = 11 * 48 / UNIT;
    private maxY = 10 * 48 / UNIT;
    private level = 0;
    private score = 0;
    private levels: LevelClassInterface[] = [];
    private tickCounter = -1;
    private playerLife = 3;
    private listOfElements: ElementInterface[] = [];
    private playerPosOffsset = 0;
    private enemyShootInterval: any = null;
    private gameOver = false;
    private gameWin = false;

    constructor(params: Params) {
        this.levels = params.levels;
        this.addLevel();
        this.addPlayer();
    }

    public getElements(): ElementInterface[] {
        return this.listOfElements;
    }

    public reset() {
        this.stopEnemyShooting();
        this.level = 0;
        this.score = 0;
        this.playerLife = 3;
        this.tickCounter = -1;
        this.playerPosOffsset = 0;
        this.gameOver = false;
        this.gameWin = false;
        this.listOfElements = [];
        this.addLevel();
        this.addPlayer();
    }

    public getScore(): number {
        return this.score;
    }

    public getLevel(): number {
        return this.level + 1;
    }

    public isGameOver(): boolean {
        return this.gameOver;
    }

    public isGameWin(): boolean {
        return this.gameWin;
    }

    public getPlayerLife(): number {
        return this.playerLife;
    }

    public stopEnemyShooting() {
        clearInterval(this.enemyShootInterval);
    }

    // 1st action
    public calculateNextPos() {
        const elementsToRemove: number[] = [];
        this.listOfElements.forEach((element, index) => {

            if (element.getPos().x > this.maxX || element.getPos().y > this.maxY) {
                elementsToRemove.push(index);
            }

            if (element.getPos().x < 0 || element.getPos().y < 0) {
                elementsToRemove.push(index);
            }

            element.setNextPosition();

            // if (this.tickCounter % element.getSpeed() === 0) {
            switch (element.getType()) {
                case ElementTypeEnum.KA_BOOM:
                    elementsToRemove.push(index);
                    break;
                case ElementTypeEnum.PLAYER:
                    const potentialX = element.getPos().x + this.playerPosOffsset;
                    element.setPosX(potentialX < 0 ? 0 : potentialX > this.maxX - 1 ? this.maxX - 1 : potentialX);
                    break;
                default:
                    element.setPosition();
                    break;
            }
            // }
        });

        elementsToRemove.forEach(index => {
            this.listOfElements.splice(index, 1);
        });

        this.playerPosOffsset = 0;
        const isPlayer = this.listOfElements.find(element => element.getType() === ElementTypeEnum.PLAYER);
        if (isPlayer === undefined && this.playerLife > 0) {
            this.addPlayer();
        }

        const isEnemy = this.listOfElements.find(element => element.getType() === ElementTypeEnum.ENEMY);
        if (isEnemy === undefined && this.playerLife > 0 && this.isGameEnd() === false) {
            this.level++;
            if (this.levels.length === this.level) {
                this.gameWin = true;
            } else {
                this.addLevel();
            }
        }
        if (this.playerLife === 0) {
            this.gameOver = true;
        }
        this.tickCounter++;
    }

    public findCollisions() {
        const listOfElements = [...this.listOfElements];
        const length = listOfElements.length;
        for (let i = 0; i < length; i++) {
            const firstElement = listOfElements.shift();
            if (firstElement) {
                const conflicts = listOfElements.filter((element: ElementInterface) => element.getArea().some(v => firstElement.getArea().indexOf(v) !== -1));
                if (conflicts.length === 2) {

                    const isEnemy = conflicts.find(element => element.getType() === ElementTypeEnum.ENEMY);
                    const isPlayer = conflicts.find(element => element.getType() === ElementTypeEnum.PLAYER);
                    const isShotEnemy = conflicts.find(element => element.getType() === ElementTypeEnum.SHOT_ENEMY);
                    const isPlayerShoot = conflicts.find(element => element.getType() === ElementTypeEnum.SHOT_PLAYER);

                    let canRemoveElements = false;
                    if (isEnemy && isPlayerShoot && isEnemy instanceof ElementEnemyClass) {
                        this.score += isEnemy.getScore();
                        const strength = isEnemy.getStrength();
                        if (strength === 1) {
                            canRemoveElements = true;
                        }
                        else if (strength > 1) {
                            isEnemy.setStrength(strength - 1);
                            // remove only shoot
                            // const isPlayerShootIndex = this.listOfElements.findIndex(element => element.isPosWithSize(x, y) && element.getType() === ElementTypeEnum.SHOT_PLAYER);
                            // this.listOfElements.splice(isPlayerShootIndex, 1);
                        }
                    } else {
                        canRemoveElements = true;
                        if ((isShotEnemy && isPlayer) || (isPlayer && isEnemy)) {
                            this.playerLife--;
                        }
                    }

                    if (canRemoveElements) {
                        // Remove both of them
                        // this.listOfElements = this.listOfElements.filter(element => element.isPosWithSize(x, y) === false);
                        // this.listOfElements.push(new ElementClass({
                        //     type: ElementTypeEnum.KA_BOOM,
                        //     speed: 5,
                        //     sizeX: 48 / UNIT,
                        //     sizeY: 48 / UNIT,
                        //     moveSequence: [],
                        //     pos: { x, y },
                        // }));
                    }
                }
                if (conflicts.length > 2) {
                    console.error('Something went wrong! More than 2 elements in one place!')
                    console.error(conflicts);
                }
            }
        }
    }

    public enemyShoot() {
        let maxY = -1;
        this.listOfElements.forEach(element => {
            if (element.getType() === ElementTypeEnum.ENEMY) {
                maxY = element.getPos().y > maxY ? element.getPos().y : maxY;
            }
        });
        if (maxY > -1) {
            const bottomEnemies = this.listOfElements.filter(element => element.getType() === ElementTypeEnum.ENEMY && element.getPos().y === maxY);
            const randomEnemy = bottomEnemies[Math.floor(Math.random() * bottomEnemies.length)];
            this.listOfElements.push(new ElementClass({
                type: ElementTypeEnum.SHOT_ENEMY,
                speed: 1,
                sizeX: 48 / UNIT,
                sizeY: 48 / UNIT,
                moveSequence: [ElementMoveDirection.DOWN],
                pos: { x: randomEnemy.getPos().x, y: randomEnemy.getPos().y + (48 / UNIT / 2) },
            }));
        }
    }

    public playerShoot() {
        const player = this.listOfElements.find(element => element.getType() === ElementTypeEnum.PLAYER);
        if (player) {
            const x = player.getPos().x;
            const y = player.getPos().y - 1;
            const playerShoot = this.listOfElements.find(element => element.getType() === ElementTypeEnum.SHOT_PLAYER && element.isPosWithSize(x, y));
            if (playerShoot === undefined) {
                this.listOfElements.push(new ElementClass({
                    type: ElementTypeEnum.SHOT_PLAYER,
                    speed: 1,
                    sizeX: 48 / UNIT,
                    sizeY: 48 / UNIT,
                    moveSequence: [ElementMoveDirection.UP],
                    pos: { x, y: y - (48 / UNIT / 2) },
                }));
            }
        }
    }

    public getStats(): string {
        return `
        life: ${this.playerLife}
        gameOver: ${this.gameOver}
        gameWin: ${this.gameWin}
        score: ${this.score}
        level: ${this.level + 1}
        tickCounter: ${this.tickCounter}
        playerPosOffsset: ${this.playerPosOffsset}
        elements:
        ${this.listOfElements.map(
            element => {
                return `
            type: ${element.getType()}
            pos: ${JSON.stringify(element.getPos())}`
            }).join("\r\n")}`;
    }

    public movePlayer(direction: ElementMoveDirection) {
        this.playerPosOffsset = direction === ElementMoveDirection.LEFT ? this.playerPosOffsset - 1 : this.playerPosOffsset + 1;
    }

    private findElement(x: number, y: number): ElemenInterfaceOrNull {
        const found = this.listOfElements.find(element => element.isPos(x, y));
        return found || null;
    }

    private findElements(x: number, y: number): ElementInterface[] {
        const found = this.listOfElements.filter(element => element.isPosWithSize(x, y));
        return found || [];
    }

    private addEnemies(levels: LevelClassInterface[]) {
        this.listOfElements = levels[this.level].getEnemies();
    }

    private addPlayer() {
        if (this.playerLife > 0) {
            this.listOfElements.push(new ElementClass({
                speed: 1,
                pos: { x: 5 * 48 / UNIT, y: 9 * 48 / UNIT },
                sizeX: 48 / UNIT,
                sizeY: 48 / UNIT,
                moveSequence: [],
                type: ElementTypeEnum.PLAYER,
            }));
        }
    }

    private isGameEnd(): boolean {
        return this.gameOver || this.gameWin;
    }

    private addLevel() {
        this.stopEnemyShooting();
        if (this.isGameEnd() === false) {
            this.addEnemies(this.levels);
            this.enemyShootInterval = setInterval(() => {
                this.enemyShoot();
            }, this.levels[this.level].getShootInterval());
        }
    }
}
