import { LevelClassInterface } from "../types";
import { EnemiesMoveDirection } from "../../game/types";
import { ElementEnemyInterface } from "../../elementEnemy/types";

interface Params {
    enemies: ElementEnemyInterface[];
    enemiesMove: EnemiesMoveDirection[];
    shootInterval: number;
}

export class LevelClass implements LevelClassInterface {
    private enemiesMove: EnemiesMoveDirection[];
    private enemies: ElementEnemyInterface[];
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