import { ElementInterface, ElementMoveDirection } from "../../element/types";

export interface GameInterface {
    movePlayer(direction: ElementMoveDirection): void;
    getElements(): ElementInterface[];
    getStats(): string;
    calculateNextPos(): void;
    findCollisions(): void;
    playerShoot(): void;
    enemyShoot(): void;
    reset(): void;
    getScore(): number;
    getLevel(): number;
    isGameWin(): boolean;
    isGameOver(): boolean;
    getPlayerLife(): number;
}

