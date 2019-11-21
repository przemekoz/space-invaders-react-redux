import { ElementInterface } from "../../element/types";

export type ElemenInterfaceOrNull = ElementInterface | null;
export type GameClassRenderInterface = Array<Array<ElementInterface | null>>;

export interface PlateInterface {
    movePlayer(direction: PlayerMoveDirection): void;
    render(): GameClassRenderInterface;
    getStats(): string;
    calculateNextPos(): void;
    findCollisions(): void;
    playerShoot(): void;
    enemyShoot(): void;
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
