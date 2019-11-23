import { EnemiesMoveDirection, GameClassRenderInterface, GameInterface, ElemenInterfaceOrNull, PlayerMoveDirection } from "../types";
import { ElementClass } from "../../element/classes";
import { ElementInterface, ElementTypeEnum } from "../../element/types";
import { LevelClassInterface } from "../../level/types";

/*
 *
 *   0,0  1,0  1,  0,3  0,4
 *   0,1  1,1  1,2  1,3  1,4
 *   ...
 */

/*
 *
 * 7 - przechwyc wcisniejce strzalek: USER prawo/lewo
 *
 */

interface Params {
    levels: LevelClassInterface[]
}

export class GameClass implements GameInterface {
    private maxX = 11;
    private maxY = 10;
    private level = 0;
    private levels: LevelClassInterface[] = [];
    private tickCounter = -1;
    private playerLife = 3;
    private listOfElements: ElementInterface[] = [];
    private playerPosOffsset = 0;
    private enemiesMoveOffsset = 0;
    private enemiesMoveState: EnemiesMoveDirection[] = [];
    private enemyShootInterval: any = null;
    private enemyShootIntervalTime = 0;

    constructor(params: Params) {
        console.log('gameClass contructor')
        this.levels = params.levels;
        this.addLevel();
        this.addPlayer();
    }

    public stopEnemyShooting() {
        clearInterval(this.enemyShootInterval);
    }

    private addLevel() {
        this.addEnemies(this.levels);
        this.addEnemiesMoves(this.levels);
        this.stopEnemyShooting();
        this.enemyShootInterval = setInterval(() => {
            this.enemyShoot();
        }, this.levels[this.level].getShootInterval());
    }

    public render(): GameClassRenderInterface {
        const toRender = [];
        for (let y = 0; y < this.maxY; y++) {
            const row: ElemenInterfaceOrNull[] = [];
            for (let x = 0; x < this.maxX; x++) {
                row.push(this.findElement(x, y));
            }
            toRender.push(row);
        }
        return toRender;
    }

    public calculateNextPos() {
        const elementsToRemove: number[] = [];
        this.listOfElements.forEach((element, index) => {

            if (element.getPos().x > this.maxX || element.getPos().y > this.maxY) {
                elementsToRemove.push(index);
            }

            if (element.getPos().x < 0 || element.getPos().y < 0) {
                elementsToRemove.push(index);
            }


            // console.log(element.getType(), element.getSpeed(), this.tickCounter % element.getSpeed() === 0, this.enemiesMoveState, this.enemiesMoveOffsset)
            // console.log(this.enemiesMoveState, this.enemiesMoveOffsset)


            if (this.tickCounter % element.getSpeed() === 0) {
                switch (element.getType()) {

                    case ElementTypeEnum.KA_BOOM:
                        elementsToRemove.push(index);
                        break;

                    case ElementTypeEnum.PLAYER:
                        const potentialX = element.getPos().x + this.playerPosOffsset;
                        element.setPosX(potentialX < 0 ? 0 : potentialX > this.maxX - 1 ? this.maxX - 1 : potentialX);
                        break;

                    case ElementTypeEnum.SHOT_ENEMY:
                        element.setPosY(element.getPos().y + 1);
                        break;

                    case ElementTypeEnum.SHOT_PLAYER:
                        element.setPosY(element.getPos().y - 1);
                        break;

                    case ElementTypeEnum.ENEMY:
                        if (this.enemiesMoveState[this.enemiesMoveOffsset] === EnemiesMoveDirection.LEFT) {
                            element.setPosX(element.getPos().x - 1);
                        }
                        if (this.enemiesMoveState[this.enemiesMoveOffsset] === EnemiesMoveDirection.RIGHT) {
                            element.setPosX(element.getPos().x + 1);
                        }
                        if (this.enemiesMoveState[this.enemiesMoveOffsset] === EnemiesMoveDirection.DOWN) {
                            element.setPosY(element.getPos().y + 1);
                        }
                        break;
                }
            }
        });

        elementsToRemove.forEach(index => {
            this.listOfElements.splice(index, 1);
        });

        this.enemiesMoveOffsset++;
        const length = this.enemiesMoveState.length;
        if (this.enemiesMoveOffsset >= length) {
            this.enemiesMoveOffsset = 0;
        }
        this.playerPosOffsset = 0;

        const isPlayer = this.listOfElements.find(element => element.getType() === ElementTypeEnum.PLAYER);
        if (isPlayer === undefined && this.playerLife > 0) {
            this.addPlayer();
        }

        const isEnemy = this.listOfElements.find(element => element.getType() === ElementTypeEnum.ENEMY);
        if (isEnemy === undefined && this.playerLife > 0) {
            this.level++;
            this.addLevel();
        }
        this.tickCounter++;
    }

    public findCollisions() {
        for (let y = 0; y < this.maxY; y++) {
            for (let x = 0; x < this.maxX; x++) {
                const elements = this.findElements(x, y);
                if (elements.length === 2) {

                    // Remove both of them
                    this.listOfElements = this.listOfElements.filter(element => element.isPos(x, y) === false);

                    this.listOfElements.push(new ElementClass({
                        type: ElementTypeEnum.KA_BOOM,
                        speed: 10,
                        pos: { x, y },
                    }));

                    const isShotEnemy = elements.find(element => element.getType() === ElementTypeEnum.SHOT_ENEMY);
                    const isEnemy = elements.find(element => element.getType() === ElementTypeEnum.ENEMY);
                    const isPlayer = elements.find(element => element.getType() === ElementTypeEnum.PLAYER);

                    if ((isShotEnemy && isPlayer) || (isPlayer && isEnemy)) {
                        this.playerLife--;
                    }
                }
                if (elements.length > 2) {
                    console.error('Something went wrong! More than 2 elements in one place!')
                    console.error(elements);
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
                speed: 3,
                pos: { x: randomEnemy.getPos().x, y: randomEnemy.getPos().y + 1 },
            }));
        }
    }

    public playerShoot() {
        const player = this.listOfElements.find(element => element.getType() === ElementTypeEnum.PLAYER);
        if (player) {
            const x = player.getPos().x;
            const y = player.getPos().y - 1;
            const playerShoot = this.listOfElements.find(element => element.getType() === ElementTypeEnum.SHOT_PLAYER && element.isPos(x, y));
            if (playerShoot === undefined) {
                this.listOfElements.push(new ElementClass({
                    type: ElementTypeEnum.SHOT_PLAYER,
                    speed: 3,
                    pos: { x, y },
                }));
            }
        }
    }

    public getStats(): string {
        return `
        life: ${this.playerLife}
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

    public movePlayer(direction: PlayerMoveDirection) {
        this.playerPosOffsset = direction === PlayerMoveDirection.LEFT ? this.playerPosOffsset - 1 : this.playerPosOffsset + 1;
    }

    private findElement(x: number, y: number): ElemenInterfaceOrNull {
        const found = this.listOfElements.find(element => element.isPos(x, y));
        return found || null;
    }

    private findElements(x: number, y: number): ElementInterface[] {
        const found = this.listOfElements.filter(element => element.isPos(x, y));
        return found || [];
    }

    private addEnemies(levels: LevelClassInterface[]) {
        this.listOfElements = levels[this.level].getEnemies();
    }

    private addEnemiesMoves(levels: LevelClassInterface[]) {
        this.enemiesMoveState = levels[this.level].getEnemiesMove();
    }

    private addPlayer() {
        if (this.playerLife > 0) {
            this.listOfElements.push(new ElementClass({
                speed: 1,
                pos: { x: 5, y: 9 },
                type: ElementTypeEnum.PLAYER,
            }));
        }
    }
}
