import { ElementClass } from "../../element/classes";
import { ElementEnemyInterface, ElementEnemySubtype } from "../types";
import { ElementTypeEnum, ElementInterface } from "../../element/types";
import { Pos } from "../../shared/types";

interface Params {
    pos: Pos;
    speed: number;
    subtype: ElementEnemySubtype;
}

export class ElementEnemyClass extends ElementClass implements ElementInterface, ElementEnemyInterface {
    private subtype: ElementEnemySubtype;

    constructor(params: Params) {
        super({
            pos: params.pos,
            speed: params.speed,
            type: ElementTypeEnum.ENEMY,
        });
        this.subtype = params.subtype;
    }

    public getSubType() {
        return this.subtype;
    }
}
