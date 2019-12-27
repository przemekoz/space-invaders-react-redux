import { Pos } from "../../shared/types";
import { ElementKaBoomAbstract } from "../../elementKaBoom/classes";

interface Params {
    pos: Pos;
}

export class ElementKaBoomPlayerClass extends ElementKaBoomAbstract {
    constructor(params: Params) {
        super({
            pos: params.pos,
        });
    }
}