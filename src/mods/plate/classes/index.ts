import { PlateInterface, EnemiesMoveDirection, PlayerMoveDirection, PlateClassRenderInterface, ElemenInterfaceOrNull } from "../types";
import { ElementClass } from "../../element/classes";
import { ElementInterface, ElementTypeEnum } from "../../element/types";
import { ElementEnemyClass } from "../../elementEnemy/classes";
import { ElementEnemySubtype } from "../../elementEnemy/types";

/*
 *
 *   0,0  1,0  1,  0,3  0,4
 *   0,1  1,1  1,2  1,3  1,4
 *   ...
 */

/*
 *
 * 1 - przesuwaj w prawo/lewo wszytkie istniejace ENEMY-ies
 *  [OK]
 */

/*
 *
 * 2 - przesuwaj w dol istniejace ENEMY-ies
 *
 */

/*
 *
 * 3 - konkretny ENEMY strzela
 *
 */

/*
 *
 * 4 - przesuwaj w dol strzal ENEMY
 *
 */

/*
 *
 * 5 - przesuwaj w prawo/lewo USER-a
 *  [OK]
 */

/*
 *
 * 6 - przesuwaj w gore strzal USER
 *
 */

/*
 *
 * 7 - przechwyc wcisniejce strzalek: USER prawo/lewo
 *
 */

/*
 * ZDARZENIE
 * 8 - dodaj obsluge kolejnych etapow (frame) w czasie - obsluga zdarzen
 *
 */

/*
 * ZDARZENIE
 * 9 - losowy ENEMY strzela
 * 
 */

/*
* ZDARZENIE
* 9 - USER strzela
* 
*/

export class PlateClass implements PlateInterface {
    private maxX = 11;
    private maxY = 10;
    private listOfElements: ElementInterface[];
    private playerPosOffsset = 0;
    private enemiesMoveOffsset = 0;
    private enemiesMoveState = [
        EnemiesMoveDirection.RIGHT,
        EnemiesMoveDirection.LEFT,
        EnemiesMoveDirection.RIGHT,
        EnemiesMoveDirection.LEFT,
        EnemiesMoveDirection.DOWN,
    ]


    constructor() {
        this.listOfElements = this.initLisOfElements();
    }

    private initLisOfElements(): ElementInterface[] {
        const listOfElements: ElementInterface[] = [];
        for (let y = 0; y < 3; y++) {
            let add = y === 2 ? 1 : y + 1;
            for (let x = 0; x < 4; x++) {
                listOfElements.push(new ElementEnemyClass({
                    subtype: ElementEnemySubtype.NORMAL,
                    pos: { x: x + add, y: y + 1 },
                }));
                add++;
            }
        }
        listOfElements.push(new ElementClass({
            type: ElementTypeEnum.PLAYER,
            pos: { x: 5, y: 9 },
        }));
        return listOfElements;
    }

    public render(): PlateClassRenderInterface {
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
        this.listOfElements.forEach(element => {
            switch (element.getType()) {

                case ElementTypeEnum.PLAYER:
                    element.setPosX(element.getPos().x + this.playerPosOffsset);
                    break;

                case ElementTypeEnum.SHOT_ENEMY:
                    element.setPosY(element.getPos().y + 1);
                    break;

                case ElementTypeEnum.SHOT_PLAYER:
                    element.setPosY(element.getPos().y - 1);
                    break;

                case ElementTypeEnum.ENEMY:
                    const length = this.enemiesMoveState.length;
                    if (this.enemiesMoveOffsset === length) {
                        this.enemiesMoveOffsset = 0;
                    }
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
        });
        this.playerPosOffsset = 0;
        this.enemiesMoveOffsset++;
    }

    public findCollisions() {
        for (let y = 0; y < this.maxY; y++) {
            for (let x = 0; x < this.maxX; x++) {

            }
        }
    }

    public playerShoot() {
        const player = this.listOfElements.find(element => element.getType() === ElementTypeEnum.PLAYER);
        if (player) {
            this.listOfElements.push(new ElementClass({
                type: ElementTypeEnum.SHOT_PLAYER,
                pos: { x: player.getPos().x, y: player.getPos().y },
            }));
        }
    }

    private findElement(x: number, y: number): ElemenInterfaceOrNull {
        const found = this.listOfElements.find(element => element.isPos(x, y));
        return found || null;
    }

    getStats(): string {
        return `
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

}
