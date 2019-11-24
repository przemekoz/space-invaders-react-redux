import { ElementInterface } from "../../element/types";

export enum ElementEnemySubtype {
    BLUE,
    RED,
    BOSS
}

export interface ElementEnemyInterface extends ElementInterface {
    getSubType(): ElementEnemySubtype;
}