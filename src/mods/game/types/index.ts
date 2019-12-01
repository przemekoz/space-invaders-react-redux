import { ElementInterface, ElementMoveDirection } from "../../element/types";

export type ElemenInterfaceOrNull = ElementInterface | null;
export type GameClassRenderInterface = Array<Array<ElementInterface | null>>;

export interface GameInterface {
    movePlayer(direction: ElementMoveDirection): void;
    render(): GameClassRenderInterface;
    getStats(): string;
    calculateNextPos(): void;
    findCollisions(): void;
    playerShoot(): void;
    enemyShoot(): void;
}

