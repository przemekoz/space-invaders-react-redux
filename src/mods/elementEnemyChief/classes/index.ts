import { Pos } from "../../shared/types";
import { ElementEnemyAbstract } from "../../elementEnemy/classes";

interface Params {
    pos: Pos;
    speed: number;
}

export class ElementEnemyChiefClass extends ElementEnemyAbstract {
    constructor(params: Params) {
        const UNIT = 12;
        super({
            pos: params.pos,
            speed: params.speed,
            sizeX: 48 / UNIT,
            sizeY: 48 / UNIT,
            strength: 2,
            score: 200,
        });
    }
}
