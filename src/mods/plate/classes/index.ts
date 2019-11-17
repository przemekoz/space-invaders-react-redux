import { PlateInterface } from "../types";
import { ElementClass } from "../../element/classes";
import { ElementInterface, ElementTypeEnum } from "../../element/types";


/*
 *
 *   0,0 - 0,1 - 0,2 - 0,3 - 0,4
 *
 *
 *
 *
 *
 */


export class PlateClass implements PlateInterface {
    listOfElements: ElementInterface[][];

    constructor() {
        this.listOfElements = [
            [
                new ElementClass(),
                new ElementClass({ type: ElementTypeEnum.ENEMY }),
                new ElementClass(),
                new ElementClass({ type: ElementTypeEnum.ENEMY }),
                new ElementClass(),
            ],
            [
                new ElementClass(),
                new ElementClass(),
                new ElementClass(),
                new ElementClass(),
                new ElementClass(),
            ],
            [
                new ElementClass(),
                new ElementClass(),
                new ElementClass({ type: ElementTypeEnum.USER }),
                new ElementClass(),
                new ElementClass(),
            ]
        ]
    }


}