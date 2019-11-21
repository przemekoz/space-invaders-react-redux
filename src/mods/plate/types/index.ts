import { ElementInterface } from "../../element/types";

export type ElemenInterfaceOrNull = ElementInterface | null;
export type PlateClassRenderInterface = Array<Array<ElementInterface | null>>;

export interface PlateInterface {
    movePlayer(direction: PlayerMoveDirection): void;
    render(): PlateClassRenderInterface;
    getStats(): string;
    calculateNextPos(): void;
    playerShoot(): void;
}

export enum EnemiesMoveDirection {
    LEFT,
    RIGHT,
    DOWN,
}

export enum PlayerMoveDirection {
    LEFT,
    RIGHT,
}
