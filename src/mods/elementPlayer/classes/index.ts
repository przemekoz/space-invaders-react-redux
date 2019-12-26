import { Pos } from "../../shared/types";
import { ElementAbstract } from "../../element/classes";
import { ElementPlayerInterface } from "../types";

export interface Params {
    pos: Pos;
}

export class ElementPlayerAbstract extends ElementAbstract implements ElementPlayerInterface {

    constructor(params: Params) {
        const UNIT = 12;
        super({
            sizeX: 48 / UNIT,
            sizeY: 48 / UNIT,
            pos: params.pos,
            speed: 1,
        });
    }

}