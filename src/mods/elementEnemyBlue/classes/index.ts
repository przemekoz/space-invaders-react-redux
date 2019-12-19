import { Pos } from "../../shared/types";
import { ElementEnemyAbstract } from "../../elementEnemy/classes";

interface Params {
    pos: Pos;
    speed: number;
}

export class ElementEnemyBlueClass extends ElementEnemyAbstract {
    constructor(params: Params) {
        const UNIT = 2;
        super({
            pos: params.pos,
            speed: params.speed,
            sizeX: 48 / UNIT,
            sizeY: 48 / UNIT,
            strength: 1,
            score: 100,
        });
    }
}
