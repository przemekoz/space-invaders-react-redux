import { Pos } from "../../shared/types";
import { ElementShootPlayerAbstract } from "../../elementShootPlayer/classes";

interface Params {
    pos: Pos;
}

export class ElementShootPlayerRegularClass extends ElementShootPlayerAbstract {

    constructor(params: Params) {
        const sizeX = 1; // UNIT = 12 => size 1
        const sizeY = 2;
        super({
            sizeX,
            sizeY,
            speed: 1,
            pos: { x: params.pos.x - Math.floor(sizeX / 2), y: params.pos.y - sizeY },
        });
    }
}