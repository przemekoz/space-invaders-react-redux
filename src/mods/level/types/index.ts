import { ElementInterface } from "../../element/types";

export interface LevelClassInterface {
    getEnemies(): ElementInterface[];
    getShootInterval(): number;
}
