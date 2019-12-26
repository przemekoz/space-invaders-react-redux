import { ElementInterface, ElementMoveDirection } from "../../element/types";
import { Pos } from "../../shared/types";
import { MoveSequenceInterafce } from "../types";

interface Params {
    element: ElementInterface;
    moveSequence: ElementMoveDirection[];
    tick: number;
}

export class MoveSequence implements MoveSequenceInterafce {
    private element: ElementInterface;
    private moveOffset = 0;
    private moveLength = 0;
    private moveSequence: ElementMoveDirection[];

    constructor(params: Params) {
        this.element = params.element;
        this.moveSequence = params.moveSequence;
        this.moveLength = params.moveSequence.length;
    }

    getSizeX(): number {
        return this.element.getSizeX();
    }

    getSizeY(): number {
        return this.element.getSizeY();
    }

    getElement(): ElementInterface {
        return this.element;
    }

    setNextPhase(tick: number): boolean {
        if (this.moveOffset >= this.moveLength) {
            this.moveOffset = 0;
        }
        const element = this.getElement();
        if (tick % element.getSpeed() === 0) {
            element.setPosX(this.getPos().x);
            element.setPosY(this.getPos().y);
            this.moveOffset++;
            console.log('+');
        }

        return true;
    }

    public getPos(): Pos {
        const { x, y } = this.element.getPos();
        switch (this.moveSequence[this.moveOffset]) {
            case ElementMoveDirection.LEFT:
                return { x: x - 1, y };

            case ElementMoveDirection.RIGHT:
                return { x: x + 1, y };

            case ElementMoveDirection.UP:
                return { x, y: y - 1 };

            case ElementMoveDirection.DOWN:
                return { x, y: y + 1 };

            case ElementMoveDirection.LEFT_UP:
                return { x: x - 1, y: y - 1 };

            case ElementMoveDirection.LEFT_DOWN:
                return { x: x - 1, y: y + 1 };

            case ElementMoveDirection.RIGHT_UP:
                return { x: x + 1, y: y - 1 };

            case ElementMoveDirection.RIGHT_DOWN:
                return { x: x + 1, y: y + 1 };

            default:
                return { x, y };
        }
    }
}
