import { ElementClass } from "../../element/classes";
import { ElementEnemyInterface, ElementEnemySubtype } from "../types";
import { ElementTypeEnum, ElementInterface, ElementMoveDirection } from "../../element/types";
import { Pos } from "../../shared/types";

interface Params {
    pos: Pos;
    unit: number;
    speed: number;
    moveSequence: ElementMoveDirection[];
    subtype: ElementEnemySubtype;
    strength?: number;
    score?: number;
}

export class ElementEnemyClass extends ElementClass implements ElementInterface, ElementEnemyInterface {
    private subtype: ElementEnemySubtype;
    private strength: number;
    private score: number;

    constructor(params: Params) {
        super({
            pos: params.pos,
            speed: params.speed,
            // FIXME remove UNIT
            sizeX: 48 / params.unit,
            sizeY: 48 / params.unit,
            moveSequence: params.moveSequence,
            type: ElementTypeEnum.ENEMY,
        });
        this.subtype = params.subtype;
        this.strength = params.subtype === ElementEnemySubtype.CHIEF ? 2 : params.strength || 1;
        this.score = params.subtype === ElementEnemySubtype.CHIEF ? 200 : params.score || 100;
    }

    public getSubType() {
        return this.subtype;
    }

    public getStrength() {
        return this.strength;
    }

    public setStrength(strength: number) {
        this.strength = strength;
    }

    public getScore(): number {
        return this.score;
    }
}
