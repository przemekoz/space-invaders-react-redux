import { Pos } from "../../shared/types";
import { ElementPlayerAbstract } from "../../elementPlayer/classes";

interface Params {
    pos: Pos;
}

export class ElementPlayerRegularClass extends ElementPlayerAbstract {
    constructor(params: Params) {
        super({
            pos: params.pos,
        });
    }
}