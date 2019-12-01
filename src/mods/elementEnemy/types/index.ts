import { ElementInterface } from "../../element/types";

export enum ElementEnemySubtype {
    BLUE,
    RED,
    CHIEF,
    BOSS
}

export interface ElementEnemyInterface extends ElementInterface {
    getSubType(): ElementEnemySubtype;
    getStrength(): number;
    getScore(): number;
    setStrength(strength: number): void;
}