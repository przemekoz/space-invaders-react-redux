import {
    ElementClassParams,
    ElementInterface,
    ElementPos,
    ElementTypeEnum
} from "../types";

export class ElementClass implements ElementInterface {
    private type: ElementTypeEnum;
    private pos: ElementPos;

    constructor(params: ElementClassParams) {
        this.type = params.type;
        this.pos = params.pos;
    }

    public getPos(): ElementPos {
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
}