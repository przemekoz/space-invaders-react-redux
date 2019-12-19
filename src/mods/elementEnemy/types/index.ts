import { ElementInterface } from "../../element/types";

export interface ElementEnemyInterface extends ElementInterface {
    getStrength(): number;
    getScore(): number;
    setStrength(strength: number): void;
}