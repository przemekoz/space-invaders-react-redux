import { PlateInterface, EnemiesMoveDirection, UserMoveDirection } from "../types";
import { ElementClass } from "../../element/classes";
import { ElementInterface, ElementTypeEnum } from "../../element/types";

/*
 *
 *   0,0 - 0,1 - 0,2 - 0,3 - 0,4
 *
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

const emptyRow = [
    new ElementClass(),
    new ElementClass(),
    new ElementClass(),
    new ElementClass(),
    new ElementClass(),
    new ElementClass(),
    new ElementClass(),
    new ElementClass(),
    new ElementClass(),
]

export class PlateClass implements PlateInterface {
    listOfElements: ElementInterface[][];

    constructor() {
        this.listOfElements = [
            [...emptyRow],
            [...emptyRow],
            [...emptyRow],
            [...emptyRow],
            [...emptyRow],
        ];
        this.listOfElements[0][2] = new ElementClass({ type: ElementTypeEnum.ENEMY });
        this.listOfElements[0][4] = new ElementClass({ type: ElementTypeEnum.ENEMY });
        this.listOfElements[0][6] = new ElementClass({ type: ElementTypeEnum.ENEMY });
        this.listOfElements[1][1] = new ElementClass({ type: ElementTypeEnum.ENEMY });
        this.listOfElements[1][3] = new ElementClass({ type: ElementTypeEnum.ENEMY });
        this.listOfElements[1][5] = new ElementClass({ type: ElementTypeEnum.ENEMY });
        this.listOfElements[4][4] = new ElementClass({ type: ElementTypeEnum.USER });
    }

    moveEnemies(direction: EnemiesMoveDirection) {
        const newListOfElements: ElementInterface[][] = [];
        this.listOfElements.forEach(
            (row: ElementInterface[], rowIndex: number) => {
                const isEnemy = row.find(element => element.type === ElementTypeEnum.ENEMY);
                newListOfElements.push(isEnemy ? [...emptyRow] : [...row]);
                row.forEach(
                    (element: ElementInterface, columnIndex: number) => {
                        if (element.type === ElementTypeEnum.ENEMY) {
                            const index = direction === EnemiesMoveDirection.LEFT ? columnIndex - 1 : columnIndex + 1;
                            newListOfElements[rowIndex][index] = element;
                        }
                    }
                );
            }
        );
        this.listOfElements = newListOfElements;
    }

    moveUser(direction: UserMoveDirection) {
        const newListOfElements: ElementInterface[][] = [];
        this.listOfElements.forEach(
            (row: ElementInterface[], rowIndex: number) => {
                const isUser = row.find(element => element.type === ElementTypeEnum.USER);
                newListOfElements.push(isUser ? [...emptyRow] : [...row]);
                row.forEach(
                    (element: ElementInterface, columnIndex: number) => {
                        if (element.type === ElementTypeEnum.USER) {
                            const index = direction === UserMoveDirection.LEFT ? columnIndex - 1 : columnIndex + 1;
                            newListOfElements[rowIndex][index] = element;
                        }
                    }
                );
            }
        );
        this.listOfElements = newListOfElements;
    }

}
