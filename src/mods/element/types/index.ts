export enum ElementTypeEnum {
    ENEMY = "ENEMY",
    SHOT_ENEMY = "SHOT_ENEMY",
    SHOT_PLAYER = "SHOT_PLAYER",
    PLAYER = "PLAYER",
    KA_BOOM = "KA_BOOM",
}

export interface ElementPos {
    x: number;
    y: number;
}

export interface ElementInterface {
    getPos(): ElementPos;
    getType(): ElementTypeEnum;
    isPos(x: number, y: number): boolean;
    setPosX(x: number): void;
    setPosY(y: number): void;
}

export interface ElementClassParams {
    type: ElementTypeEnum;
    pos: ElementPos;
}