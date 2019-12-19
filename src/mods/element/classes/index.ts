import {
    ElementInterface,
} from "../types";
import { Pos } from "../../shared/types";

export interface Params {
    pos: Pos;
    speed: number;
    sizeX: number;
    sizeY: number;
}

export class ElementAbstract implements ElementInterface {
    private static idCounter = 0;
    private id = 0;
    private pos: Pos;
    private speed: number;
    private sizeX: number;
    private sizeY: number;

    constructor(params: Params) {
        this.pos = params.pos;
        this.speed = params.speed;
        this.sizeX = params.sizeX;
        this.sizeY = params.sizeY;
        this.id = ElementAbstract.idCounter;
        ElementAbstract.idCounter++;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }

    public getPos(): Pos {
        return this.pos;
    }

    public setPosX(x: number) {
        this.pos.x = x;
    }

    public setPosY(y: number) {
        this.pos.y = y;
    }

    public isPos(x: number, y: number): boolean {
        return this.pos.x === x && this.pos.y === y;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public getSizeX(): number {
        return this.sizeX;
    }

    public getSizeY(): number {
        return this.sizeY;
    }
}