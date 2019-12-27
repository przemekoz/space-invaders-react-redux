import { Pos } from "../../shared/types";
import { UNIT } from "../../game/config/levels";
import { ElementKaBoomInterface } from "../types";
import { ElementAbstract } from "../../element/classes";

interface Params {
    pos: Pos;
}

export class ElementKaBoomAbstract extends ElementAbstract implements ElementKaBoomInterface {
    protected phase: number;

    constructor(params: Params) {
        super({
            speed: 1,
            sizeX: 48 / UNIT,
            sizeY: 48 / UNIT,
            pos: params.pos,
        });
        this.phase = 0;
    }

    public setNextPhase(tick: number): boolean {
        if (this.phase > 3) {
            return false;
        }
        if (tick % this.getSpeed() === 0) {
            this.phase++;
        }
        return true;
    }

    public getPhase(): number {
        return this.phase;
    }
}