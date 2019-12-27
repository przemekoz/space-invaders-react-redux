import { LevelClassInterface } from "../types";
import { ElementEnemyInterface } from "../../elementEnemy/types";

interface Params {
    enemies: ElementEnemyInterface[];
    shootSpeed: number;
}

export class LevelClass implements LevelClassInterface {
    private enemies: ElementEnemyInterface[];
    private shootSpeed: number;

    constructor(params: Params) {
        this.enemies = params.enemies;
        this.shootSpeed = params.shootSpeed;
    }

    public getEnemies() {
        return this.enemies;
    }

    public getShootSpeed() {
        return this.shootSpeed;
    }
}