import { Pos } from "../../shared/types";

export enum ElementTypeEnum {
    ENEMY = "ENEMY",
    PLAYER = "PLAYER",
    KA_BOOM = "KA_BOOM",
    SHOT_ENEMY = "SHOT_ENEMY",
    SHOT_PLAYER = "SHOT_PLAYER",
}

export interface ElementInterface {
    getPos(): Pos;
    getType(): ElementTypeEnum;
    isPos(x: number, y: number): boolean;
    setPosX(x: number): void;
    setPosY(y: number): void;
    getSpeed(): number;
    setNextPosition(): void;
}

export enum ElementMoveDirection {
    LEFT,
    RIGHT,
    DOWN,
    UP,
    LEFT_UP,
    LEFT_DOWN,
    RIGHT_UP,
    RIGHT_DOWN
}