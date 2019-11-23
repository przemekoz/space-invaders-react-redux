import { LevelClass } from "../../level/classes";
import { EnemiesMoveDirection } from "../types";
import { ElementEnemyClass } from "../../elementEnemy/classes";
import { ElementEnemySubtype } from "../../elementEnemy/types";



export const GAME_LEVELS = [

    new LevelClass({
        enemies: [
            new ElementEnemyClass({ speed: 10, pos: { x: 2, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 10, pos: { x: 4, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 10, pos: { x: 6, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 10, pos: { x: 8, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 10, pos: { x: 3, y: 2 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 10, pos: { x: 5, y: 2 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 10, pos: { x: 7, y: 2 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 10, pos: { x: 2, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 10, pos: { x: 4, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 10, pos: { x: 6, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 10, pos: { x: 8, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
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
        enemies: [
            new ElementEnemyClass({ speed: 9, pos: { x: 2, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 9, pos: { x: 4, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 9, pos: { x: 7, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 9, pos: { x: 9, y: 1 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 9, pos: { x: 3, y: 2 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 9, pos: { x: 6, y: 2 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 9, pos: { x: 2, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 9, pos: { x: 4, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 9, pos: { x: 7, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
            new ElementEnemyClass({ speed: 9, pos: { x: 9, y: 3 }, subtype: ElementEnemySubtype.NORMAL }),
        ],
        enemiesMove: [
            EnemiesMoveDirection.LEFT,
            EnemiesMoveDirection.RIGHT,
            EnemiesMoveDirection.LEFT,
            EnemiesMoveDirection.RIGHT,
            EnemiesMoveDirection.DOWN,
        ],
    }),
];