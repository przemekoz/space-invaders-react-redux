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
    getNextPos(): Pos;
    getType(): ElementTypeEnum;
    isPos(x: number, y: number): boolean;
    // isNextPos(x: number, y: number): boolean;
    setPosX(x: number): void;
    setPosY(y: number): void;
    setNextPosX(x: number): void;
    setNextPosY(y: number): void;
    getSpeed(): number;
    setPosition(): void;
    setNextPosition(): void;
    getSizeX(): number;
    getSizeY(): number;
    getArea(): string[];
    isPosWithSize(x: number, y: number): boolean;
    setId(id: number): void;
    getId(): number;
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