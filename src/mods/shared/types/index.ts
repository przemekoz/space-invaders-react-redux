export interface Pos {
    x: number;
    y: number;
}

export interface CommonElementAndMoveSequence {
    getPos(): Pos;
    getSizeX(): number;
    getSizeY(): number;
}

export interface ElementSetNextPhase {
    setNextPhase(tick: number): boolean;
}