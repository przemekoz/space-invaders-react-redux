import { ElementClass } from "../../element/classes";
import { ElementEnemyClassParams, ElementEnemyInterface, ElementEnemySubtype } from "../types";
import { ElementTypeEnum } from "../../element/types";

export class ElementEnemyClass extends ElementClass implements ElementEnemyInterface {
    private subtype: ElementEnemySubtype;

    constructor(params: ElementEnemyClassParams) {
        super({
            pos: params.pos,
            type: ElementTypeEnum.ENEMY,
        });
        this.subtype = params.subtype;
    }
}