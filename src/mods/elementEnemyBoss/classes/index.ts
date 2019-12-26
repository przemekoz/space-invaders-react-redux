import { Pos } from "../../shared/types";
import { ElementEnemyAbstract } from "../../elementEnemy/classes";

interface Params {
    pos: Pos;
    speed: number;
}

export class ElementEnemyBossClass extends ElementEnemyAbstract {
    constructor(params: Params) {
        const UNIT = 12;
        super({
            pos: params.pos,
            speed: params.speed,
            sizeX: 240 / UNIT,
            sizeY: 240 / UNIT,
            strength: 10,
            score: 1000,
        });
    }
}
