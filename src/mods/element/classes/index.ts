import {
    ElementInterface,
    ElementTypeEnum
} from "../types";
import { Pos } from "../../shared/types";

export interface Params {
    pos: Pos;
    speed: number;
    type: ElementTypeEnum;
}

export class ElementClass implements ElementInterface {
    private pos: Pos;
    private speed: number;
    private type: ElementTypeEnum;

    constructor(params: Params) {
        this.pos = params.pos;
        this.type = params.type;
        this.speed = params.speed;
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

    public getType(): ElementTypeEnum {
        return this.type;
    }

    public getSpeed(): number {
        return this.speed;
    }
}