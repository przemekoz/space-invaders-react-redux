import { LevelClassInterface } from "../types";
import { EnemiesMoveDirection } from "../../game/types";
import { ElementInterface } from "../../element/types";

interface Params {
    enemies: ElementInterface[];
    enemiesMove: EnemiesMoveDirection[];
    shootInterval: number;
}

export class LevelClass implements LevelClassInterface {
    private enemiesMove: EnemiesMoveDirection[];
    private enemies: ElementInterface[];
    private shootInterval: number;

    constructor(params: Params) {
        this.enemies = params.enemies;
        this.enemiesMove = params.enemiesMove;
        this.shootInterval = params.shootInterval;
    }

    public getEnemies() {
        return this.enemies;
    }

    public getEnemiesMove() {
        return this.enemiesMove;
    }

    public getShootInterval() {
        return this.shootInterval;
    }
}