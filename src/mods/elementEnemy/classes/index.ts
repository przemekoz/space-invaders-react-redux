import { ElementAbstract } from "../../element/classes";
import { ElementEnemyInterface } from "../types";
import { Pos } from "../../shared/types";

export interface Params {
    pos: Pos;
    speed: number;
    sizeX: number;
    sizeY: number;
    strength: number;
    score: number;
}

export class ElementEnemyAbstract extends ElementAbstract implements ElementEnemyInterface {
    protected strength: number;
    protected score: number;

    constructor(params: Params) {
        super({
            pos: params.pos,
            speed: params.speed,
            sizeX: params.sizeX,
            sizeY: params.sizeY,
        });
        this.strength = params.strength;
        this.score = params.score;
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