export enum ElementTypeEnum {
    EMPTY = "EMPTY",
    ENEMY = "ENEMY",
    ENEMY_KILLED = "ENEMY_KILLED",
    ENEMY_SHOT = "ENEMY_SHOT",
    USER_SHOT = "USER_SHOT",
    USER = "USER",
}
export interface ElementInterface {
    type: ElementTypeEnum
}