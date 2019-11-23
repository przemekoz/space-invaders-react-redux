import { LevelClass } from "../../level/classes";
import { EnemiesMoveDirection } from "../types";
import { ElementEnemyClass } from "../../elementEnemy/classes";
import { ElementEnemySubtype } from "../../elementEnemy/types";


const speeds = [81, 71, 61];

export const GAME_LEVELS = [

    new LevelClass({
        shootInterval: 5000,
        enemies: [
            new ElementEnemyClass({ speed: speeds[0], pos: { x: 6, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[0], pos: { x: 4, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[0], pos: { x: 8, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[0], pos: { x: 3, y: 2 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[0], pos: { x: 2, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[0], pos: { x: 5, y: 2 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[0], pos: { x: 7, y: 2 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[0], pos: { x: 2, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[0], pos: { x: 4, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[0], pos: { x: 6, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[0], pos: { x: 8, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
        ],
        enemiesMove: [
            EnemiesMoveDirection.RIGHT,
            EnemiesMoveDirection.LEFT,
            EnemiesMoveDirection.RIGHT,
            EnemiesMoveDirection.LEFT,
            EnemiesMoveDirection.DOWN,
        ],
    }),

    new LevelClass({
        shootInterval: 4500,
        enemies: [
            new ElementEnemyClass({ speed: speeds[1], pos: { x: 4, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[1], pos: { x: 7, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[1], pos: { x: 9, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[1], pos: { x: 3, y: 2 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[1], pos: { x: 2, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[1], pos: { x: 8, y: 2 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[1], pos: { x: 2, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[1], pos: { x: 4, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[1], pos: { x: 7, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[1], pos: { x: 9, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
        ],
        enemiesMove: [
            EnemiesMoveDirection.LEFT,
            EnemiesMoveDirection.RIGHT,
            EnemiesMoveDirection.LEFT,
            EnemiesMoveDirection.RIGHT,
            EnemiesMoveDirection.DOWN,
        ],
    }),

    new LevelClass({
        shootInterval: 4000,
        enemies: [
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 0, y: 0 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 1, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 2, y: 2 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 3, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 4, y: 4 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 5, y: 5 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 6, y: 4 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 7, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 8, y: 2 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 9, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 10, y: 0 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 3, y: 0 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 4, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 5, y: 2 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 6, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: speeds[2], pos: { x: 7, y: 0 }, subtype: ElementEnemySubtype.NORMAL }),
        ],
        enemiesMove: [
            EnemiesMoveDirection.DOWN,
        ],
    }),
];