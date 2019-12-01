import { ElementInterface } from "../../element/types";

export enum ElementEnemySubtype {
    BLUE,
    RED,
    CHIEF
}

export interface ElementEnemyInterface extends ElementInterface {
    getSubType(): ElementEnemySubtype;
    getStrength(): number;
    setStrength(strength: number): void;
}