import { PlateInterface } from "../types";
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
 *
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
 *
 */

/*
 *
 * 6 - przesuwaj w gore strzal USER
 *
 */

export class PlateClass implements PlateInterface {
    listOfElements: ElementInterface[][];

    constructor() {
        this.listOfElements = [
            [
                new ElementClass(),
                new ElementClass(),
                new ElementClass({ type: ElementTypeEnum.ENEMY }),
                new ElementClass(),
                new ElementClass(),
                new ElementClass(),
                new ElementClass({ type: ElementTypeEnum.ENEMY }),
                new ElementClass(),
                new ElementClass(),
            ],
            [
                new ElementClass(),
                new ElementClass(),
                new ElementClass(),
                new ElementClass(),
                new ElementClass(),
                new ElementClass(),
                new ElementClass(),
                new ElementClass(),
                new ElementClass(),
            ],
            [
                new ElementClass(),
                new ElementClass(),
                new ElementClass(),
                new ElementClass(),
                new ElementClass({ type: ElementTypeEnum.USER }),
                new ElementClass(),
                new ElementClass(),
                new ElementClass(),
                new ElementClass(),
            ]
        ];

        setTimeout(this.moveEnemies.bind(this), 2000)
    }

    moveEnemies(direction = "left") {
        const newListOfElements: ElementInterface[][] = [];
        this.listOfElements.forEach(
            (row: ElementInterface[], rowIndex: number) => {
                newListOfElements.push([...row]);
                row.forEach(
                    (element: ElementInterface, columnIndex: number) => {
                        if (element.type === ElementTypeEnum.ENEMY) {
                            const index = direction === "left" ? columnIndex - 1 : columnIndex + 1;
                            newListOfElements[rowIndex][index] = element;
                            return new ElementClass();
                        } else {
                            return element;
                        }
                    }
                );
            }
        );
        this.listOfElements = newListOfElements;
    }

}
