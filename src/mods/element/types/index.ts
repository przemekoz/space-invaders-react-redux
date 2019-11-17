export enum ElementTypeEnum {
    EMPTY = "EMPTY",
    ENEMY = "ENEMY",
    SHOT = "SHOT",
    USER = "USER",
}
export interface ElementInterface {
    type: ElementTypeEnum
}