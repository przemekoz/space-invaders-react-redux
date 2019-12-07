import { GameInterface } from "../types";
import { ElementClass } from "../../element/classes";
import { ElementInterface, ElementTypeEnum, ElementMoveDirection } from "../../element/types";
import { LevelClassInterface } from "../../level/types";
import { ElementEnemyClass } from "../../elementEnemy/classes";
import { UNIT } from "../config/levels";
import { Pos } from "../../shared/types";

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
        console.groupCollapsed('calculate next pos')
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
        console.groupEnd();
    }

    // 2nd action
    public findCollisions() {
        console.groupCollapsed('find colliosion')
        const listOfElements = [...this.listOfElements];
        const length = listOfElements.length;
        for (let i = 0; i < length; i++) {
            const firstElement = listOfElements.shift();
            if (firstElement) {
                const conflicts = listOfElements.filter((element: ElementInterface) => element.getArea().some(v => firstElement.getArea().indexOf(v) !== -1));
                if (conflicts) {
                    console.log(length, firstElement, conflicts)
                    conflicts.push(firstElement);
                }

                if (conflicts.length === 2) {

                    let kaBoomPos: Pos = { x: -1, y: -1 };
                    const isEnemy = conflicts.find(element => element.getType() === ElementTypeEnum.ENEMY);
                    const isPlayer = conflicts.find(element => element.getType() === ElementTypeEnum.PLAYER);
                    const isShotEnemy = conflicts.find(element => element.getType() === ElementTypeEnum.SHOT_ENEMY);
                    const isPlayerShoot = conflicts.find(element => element.getType() === ElementTypeEnum.SHOT_PLAYER);

                    const idToDelete: number[] = [];

                    if (isEnemy && isPlayerShoot && isEnemy instanceof ElementEnemyClass) {
                        this.score += isEnemy.getScore();
                        const strength = isEnemy.getStrength();
                        if (strength > 1) {
                            isEnemy.setStrength(strength - 1);
                            // remove only shoot
                            const index = this.listOfElements.findIndex(element => element.getId() === isPlayerShoot.getId());
                            this.listOfElements.splice(index, 1);
                        }
                        else {
                            idToDelete.push(isEnemy.getId());
                            idToDelete.push(isPlayerShoot.getId());
                        }
                    }
                    if (isShotEnemy && isPlayer) {
                        this.playerLife--;
                        idToDelete.push(isShotEnemy.getId());
                        idToDelete.push(isPlayer.getId());
                        kaBoomPos = isPlayer.getPos();
                    }
                    if (isPlayer && isEnemy) {
                        this.playerLife--;
                        idToDelete.push(isPlayer.getId());
                        idToDelete.push(isEnemy.getId());
                        kaBoomPos = isPlayer.getPos();
                    }
                    if (isPlayerShoot && isShotEnemy) {
                        idToDelete.push(isPlayerShoot.getId());
                        idToDelete.push(isShotEnemy.getId());
                    }

                    console.log(kaBoomPos)
                    console.log(idToDelete)

                    if (idToDelete.length) {
                        // Remove both of them
                        idToDelete.forEach(id => {
                            const index = this.listOfElements.findIndex(element => element.getId() === id);
                            this.listOfElements.splice(index, 1);
                        });
                    }
                    if (kaBoomPos.x > -1) {
                        this.listOfElements.push(new ElementClass({
                            type: ElementTypeEnum.KA_BOOM,
                            speed: 5,
                            sizeX: 48 / UNIT,
                            sizeY: 48 / UNIT,
                            moveSequence: [],
                            pos: kaBoomPos,
                        }));
                    }
                }
                if (conflicts.length > 2) {
                    console.error('Something went wrong! More than 2 elements in one place!')
                    console.error(conflicts);
                }
            }
        }
        console.groupEnd();
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
            const enemySizeX = 48 / UNIT;
            const sizeX = 48 / UNIT;
            const sizeY = 48 / UNIT;
            this.listOfElements.push(new ElementClass({
                type: ElementTypeEnum.SHOT_ENEMY,
                speed: 1,
                sizeX,
                sizeY,
                moveSequence: [ElementMoveDirection.DOWN],
                pos: { x: randomEnemy.getPos().x + Math.floor(enemySizeX / 2 - sizeX / 2), y: randomEnemy.getPos().y + sizeY },
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
                const playerSizeX = 48 / UNIT;
                const sizeX = 48 / UNIT;
                const sizeY = 48 / UNIT;
                this.listOfElements.push(new ElementClass({
                    type: ElementTypeEnum.SHOT_PLAYER,
                    speed: 1,
                    sizeX,
                    sizeY,
                    moveSequence: [ElementMoveDirection.UP],
                    pos: { x: x + Math.floor(playerSizeX / 2 - sizeX / 2), y: y - sizeY },
                }));
            }
        }
    }

    public getStats(): string {
        return `
        unit: ${UNIT}
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
            id: ${element.getId()}
            type: ${element.getType()}
            pos: ${JSON.stringify(element.getPos())}
            nextPos: ${JSON.stringify(element.getNextPos())}
            size: ${element.getSizeX()} x ${element.getSizeY()}
            area: ${element.getArea()}`
            }).join("\r\n")}`;
    }

    public movePlayer(direction: ElementMoveDirection) {
        this.playerPosOffsset = direction === ElementMoveDirection.LEFT ? this.playerPosOffsset - 1 : this.playerPosOffsset + 1;
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
