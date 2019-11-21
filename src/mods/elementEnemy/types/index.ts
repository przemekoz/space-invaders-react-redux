import { ElementInterface, ElementPos } from "../../element/types";

export enum ElementEnemySubtype {
    NORMAL,
}

export interface ElementEnemyInterface extends ElementInterface {

}

export interface ElementEnemyClassParams {
    subtype: ElementEnemySubtype;
    pos: ElementPos;
}