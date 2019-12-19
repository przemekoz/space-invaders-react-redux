import { GameInterface } from "../types";
import { ElementInterface, ElementMoveDirection } from "../../element/types";
import { LevelClassInterface } from "../../level/types";
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
    private level: number;
    private score: number;
    private playerLife: number;
    private tickCounter: number;
    private playerPosOffsset: number;
    private levels: LevelClassInterface[] = [];
    private listOfElements: ElementInterface[];
    private enemyShootInterval: any = null;
    private gameOver: boolean;
    private gameWin: boolean;

    constructor(params: Params) {
        this.levels = params.levels;
        this.reset();
    }

    public getElements(): ElementInterface[] {
        return this.listOfElements;
    }

    public reset() {
        this.stopEnemyShooting();
        this.level = 0;
        this.score = 0;
        this.playerLife = 3;
        this.tickCounter = 0;
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
            switch (true) {

                case element instanceof ElementKaBoomAbstract:
                    element.setNextPhase(this.tickCounter);
                    if (element.shouldRemove()) {
                        elementsToRemove.push(index);
                    }
                    break;

                case element instanceof ElementPlayerAbstract:
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
        const isPlayer = this.listOfElements.find(element => element instanceof ElementPlayerAbstract);
        if (isPlayer === undefined && this.playerLife > 0) {
            this.addPlayer();
        }

        const isEnemy = this.listOfElements.find(element => element instanceof ElementEnemyAbstract);
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
                    const foundEnemy = conflicts.find(element => element instanceof ElementEnemyAbstract);
                    const foundPlayer = conflicts.find(element => element instanceof ElementPlayerAbstract);
                    const foundShotEnemy = conflicts.find(element => element instanceof ElementShootEnemyAbstract);
                    const foundPlayerShoot = conflicts.find(element => element instanceof ElementShootPlayerAbstract);

                    const idToDelete: number[] = [];

                    if (foundEnemy && foundPlayerShoot && foundEnemy instanceof ElementEnemyAbstract) {
                        this.score += foundEnemy.getScore();
                        const strength = foundEnemy.getStrength();
                        if (strength > 1) {
                            foundEnemy.setStrength(strength - 1);
                            // remove only shoot
                            const index = this.listOfElements.findIndex(element => element.getId() === foundPlayerShoot.getId());
                            this.listOfElements.splice(index, 1);
                        }
                        else {
                            kaBoomPos = foundEnemy.getPos();
                            idToDelete.push(foundEnemy.getId());
                            idToDelete.push(foundPlayerShoot.getId());
                        }
                    }
                    if (foundShotEnemy && foundPlayer) {
                        this.playerLife--;
                        idToDelete.push(foundShotEnemy.getId());
                        idToDelete.push(foundPlayer.getId());
                        kaBoomPos = foundPlayer.getPos();
                    }
                    if (foundPlayer && foundEnemy) {
                        this.playerLife--;
                        idToDelete.push(foundPlayer.getId());
                        idToDelete.push(foundEnemy.getId());
                        kaBoomPos = foundPlayer.getPos();
                    }
                    if (foundPlayerShoot && foundShotEnemy) {
                        idToDelete.push(foundPlayerShoot.getId());
                        idToDelete.push(foundShotEnemy.getId());
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
                        this.listOfElements.push(new ElementKaBoomEnemyClass({ pos: kaBoomPos, tick: this.tickCounter - 1 }));
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
            if (element instanceof ElementEnemyAbstract) {
                maxY = element.getPos().y > maxY ? element.getPos().y : maxY;
            }
        });
        if (maxY > -1) {
            const bottomEnemies = this.listOfElements.filter(element => element instanceof ElementEnemyAbstract && element.getPos().y === maxY);
            const randomEnemy = bottomEnemies[Math.floor(Math.random() * bottomEnemies.length)];
            const enemySizeX = 48 / UNIT;
            this.listOfElements.push(new ElementShootEnemyRegularClass({
                pos: { x: randomEnemy.getPos().x + Math.floor(enemySizeX / 2), y: randomEnemy.getPos().y },
            }));
        }
    }

    public playerShoot() {
        const player = this.listOfElements.find(element => element instanceof ElementPlayerAbstract);
        if (player) {
            const x = player.getPos().x;
            const y = player.getPos().y - 1;
            const playerShoot = this.listOfElements.find(element => element instanceof ElementShootPlayerAbstract && element.isPosWithSize(x, y));
            if (playerShoot === undefined) {
                const playerSizeX = 48 / UNIT;
                const shoot = new ElementShootPlayerRegularClass({
                    pos: { x: x + Math.floor(playerSizeX / 2), y },
                })
                const anotherShoot = this.listOfElements.find(element => element instanceof ElementShootPlayerAbstract && element.isInArea(shoot.getArea()));
                if (anotherShoot === undefined) {
                    this.listOfElements.push(shoot);
                }
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
            pos: ${JSON.stringify(element.getPos())}
            size: ${element.getSizeX()} x ${element.getSizeY()}
            area: ${getArea(element)}`
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
            this.listOfElements.push(new ElementPlayerRegularClass({
                pos: { x: 5 * 48 / UNIT, y: 9 * 48 / UNIT },
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
