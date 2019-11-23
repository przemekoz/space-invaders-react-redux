import { EnemiesMoveDirection } from "../../game/types";
import { ElementInterface } from "../../element/types";

export interface LevelClassInterface {
    getEnemiesMove(): EnemiesMoveDirection[];
    getEnemies(): ElementInterface[];
}
