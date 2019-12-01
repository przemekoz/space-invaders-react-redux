import { LevelClassInterface } from "../types";
import { ElementEnemyInterface } from "../../elementEnemy/types";

interface Params {
    enemies: ElementEnemyInterface[];
    shootInterval: number;
}

export class LevelClass implements LevelClassInterface {
    private enemies: ElementEnemyInterface[];
    private shootInterval: number;

    constructor(params: Params) {
        this.enemies = params.enemies;
        this.shootInterval = params.shootInterval;
    }

    public getEnemies() {
        return this.enemies;
    }

    public getShootInterval() {
        return this.shootInterval;
    }
}