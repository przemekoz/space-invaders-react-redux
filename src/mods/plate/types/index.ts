import { ElementInterface } from "../../element/types";

export interface PlateInterface {
    listOfElements: ElementInterface[][];
    moveEnemies: (direction: EnemiesMoveDirection) => void;
}

export enum EnemiesMoveDirection {
    LEFT,
    RIGHT
}