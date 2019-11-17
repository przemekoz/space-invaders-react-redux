import { ElementInterface, ElementTypeEnum } from "../types";

export interface ElementClassParamType {
    type: ElementTypeEnum;
}

export class ElementClass implements ElementInterface {
    type: ElementTypeEnum;

    constructor(params: ElementClassParamType = { type: ElementTypeEnum.EMPTY }) {
        this.type = params.type;
    }
}