import { Pos } from "../../shared/types";
import { ElementShootEnemyAbstract } from "../../elementShootEnemy/classes";

interface Params {
    pos: Pos;
}

export class ElementShootEnemyRegularClass extends ElementShootEnemyAbstract {
    constructor(params: Params) {
        const UNIT = 12;
        const sizeX = 12 / UNIT;
        const sizeY = 24 / UNIT;
        super({
            sizeX,
            sizeY,
            speed: 1,
            pos: { x: params.pos.x + Math.floor(sizeX / 2), y: params.pos.y },
        });
    }
}
