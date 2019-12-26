import { Pos } from "../../shared/types";

export interface ElementInterface {
    getPos(): Pos;
    isPos(x: number, y: number): boolean;
    setPosX(x: number): void;
    setPosY(y: number): void;
    getSizeX(): number;
    getSizeY(): number;
    getSpeed(): number;
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