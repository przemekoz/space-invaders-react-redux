import { LevelClassInterface } from "../types";
import { EnemiesMoveDirection } from "../../game/types";
import { ElementInterface } from "../../element/types";

interface Params {
    enemies: ElementInterface[];
    enemiesMove: EnemiesMoveDirection[];
}

export class LevelClass implements LevelClassInterface {
    private enemiesMove: EnemiesMoveDirection[];
    private enemies: ElementInterface[];

    constructor(params: Params) {
        this.enemies = params.enemies;
        this.enemiesMove = params.enemiesMove;
    }

    public getEnemies() {
        return this.enemies;
    }

    public getEnemiesMove() {
        return this.enemiesMove;
    }
}