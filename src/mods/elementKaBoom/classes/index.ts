import { ElementClass } from "../../element/classes";
import { ElementInterface, ElementTypeEnum } from "../../element/types";
import { Pos } from "../../shared/types";
import { UNIT } from "../../game/config/levels";
import { ElementKaBoomInterface } from "../types";

interface Params {
    pos: Pos;
    tick: number;
}

export class ElementKaBoomClass extends ElementClass implements ElementInterface, ElementKaBoomInterface {
    private tick: number;
    private phase: number;

    constructor(params: Params) {
        super({
            type: ElementTypeEnum.KA_BOOM,
            speed: 1,
            sizeX: 48 / UNIT,
            sizeY: 48 / UNIT,
            moveSequence: [],
            pos: params.pos,
        });
        this.phase = 0;
        this.tick = params.tick;
        console.log('-----------------------')
        console.log(this.phase, this.tick)
    }

    public setNextPhase(tick: number) {
        this.phase = tick - this.tick;
        if (this.phase > 4) {
            this.phase = -1;
        }
        console.log('++++++++++++++++++++++')
        console.log(this.phase);
    }

    public shouldRemove(): boolean {
        return this.phase === -1;
    }

    public getPhase(): number {
        return this.phase;
    }
}