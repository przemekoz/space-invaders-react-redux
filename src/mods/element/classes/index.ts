import {
    ElementInterface,
    ElementTypeEnum,
    ElementMoveDirection
} from "../types";
import { Pos } from "../../shared/types";

export interface Params {
    pos: Pos;
    speed: number;
    type: ElementTypeEnum;
    moveSequence: ElementMoveDirection[];
}

export class ElementClass implements ElementInterface {
    private pos: Pos;
    private speed: number;
    private type: ElementTypeEnum;
    private moveOffset = 0;
    private moveSequence: ElementMoveDirection[];

    constructor(params: Params) {
        this.pos = params.pos;
        this.type = params.type;
        this.speed = params.speed;
        this.moveSequence = params.moveSequence;
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

    public setNextPosition() {
        const length = this.moveSequence.length;
        if (length) {
            if (this.moveOffset >= length) {
                this.moveOffset = 0;
            }
            const { x, y } = this.getPos();

            switch (this.moveSequence[this.moveOffset]) {
                case ElementMoveDirection.LEFT:
                    this.setPosX(x - 1);
                    break;

                case ElementMoveDirection.RIGHT:
                    this.setPosX(x + 1);
                    break;

                case ElementMoveDirection.UP:
                    this.setPosY(y - 1);
                    break;

                case ElementMoveDirection.DOWN:
                    this.setPosY(y + 1);
                    break;

                case ElementMoveDirection.LEFT_UP:
                    this.setPosX(x - 1);
                    this.setPosY(y - 1);
                    break;

                case ElementMoveDirection.LEFT_DOWN:
                    this.setPosX(x - 1);
                    this.setPosY(y + 1);
                    break;

                case ElementMoveDirection.RIGHT_UP:
                    this.setPosX(x + 1);
                    this.setPosY(y - 1);
                    break;

                case ElementMoveDirection.RIGHT_DOWN:
                    this.setPosX(x + 1);
                    this.setPosY(y + 1);
                    break;
            }
            this.moveOffset++;
        }
    }
}