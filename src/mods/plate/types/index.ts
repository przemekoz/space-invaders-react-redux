import { ElementInterface } from "../../element/types";

export interface PlateInterface {
    listOfElements: ElementInterface[][];
    moveEnemies: (direction: EnemiesMoveDirection) => void;
    moveUser: (direction: UserMoveDirection) => void;
}

export enum EnemiesMoveDirection {
    LEFT,
    RIGHT,
    DOWN
}

export enum UserMoveDirection {
    LEFT,
    RIGHT,
}
