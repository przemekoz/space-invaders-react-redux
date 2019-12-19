import { LevelClass } from "../../level/classes";
import { ElementEnemyRegularClass } from "../../elementEnemy/classes";
import { ElementEnemySubtype } from "../../elementEnemy/types";
import { ElementMoveDirection } from "../../element/types";

export const UNIT = 12; // 2px is one unit

const speeds = [81, 41, 21];
const moveSequence = [
    [
        ElementMoveDirection.RIGHT,
        ElementMoveDirection.LEFT,
        ElementMoveDirection.DOWN,
    ],
    [
        ElementMoveDirection.RIGHT,
        ElementMoveDirection.LEFT,
        ElementMoveDirection.RIGHT,
        ElementMoveDirection.LEFT,
        ElementMoveDirection.DOWN,
        ElementMoveDirection.DOWN,
        ElementMoveDirection.LEFT,
        ElementMoveDirection.RIGHT,
        ElementMoveDirection.LEFT,
        ElementMoveDirection.RIGHT,
        ElementMoveDirection.LEFT,
    ],
    [
        ElementMoveDirection.RIGHT,
        ElementMoveDirection.LEFT,
        ElementMoveDirection.RIGHT,
        ElementMoveDirection.LEFT,
        ElementMoveDirection.DOWN,
    ],
]

const sizeX = 48 / UNIT;
const sizeY = 48 / UNIT;
const firstLevelEnemy = { speed: 80, moveSequence: moveSequence[0], unit: UNIT };
const secondLevelEnemy = { speed: 70, moveSequence: moveSequence[1], unit: UNIT };

export const GAME_LEVELS = [

    new LevelClass({
        // TEST !
        shootInterval: 300000,
        enemies: [
            new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 4 * sizeX, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 2 * sizeX, y: 7 * sizeY }, subtype: ElementEnemySubtype.CHIEF }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 3 * sizeX, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 4 * sizeX, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 5 * sizeX, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 6 * sizeX, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 7 * sizeX, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 8 * sizeX, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),

            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 2 * sizeX, y: 1 * sizeY }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 3 * sizeX, y: 1 * sizeY }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 4 * sizeX, y: 1 * sizeY }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 5 * sizeX, y: 1 * sizeY }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 6 * sizeX, y: 1 * sizeY }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 7 * sizeX, y: 1 * sizeY }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 8 * sizeX, y: 1 * sizeY }, subtype: ElementEnemySubtype.BLUE }),

            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 2 * sizeX, y: 2 * sizeY }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 3 * sizeX, y: 2 * sizeY }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 4 * sizeX, y: 2 * sizeY }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 5 * sizeX, y: 2 * sizeY }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 6 * sizeX, y: 2 * sizeY }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 7 * sizeX, y: 2 * sizeY }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 8 * sizeX, y: 2 * sizeY }, subtype: ElementEnemySubtype.RED }),

            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 2 * sizeX, y: 3 * sizeY }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 3 * sizeX, y: 3 * sizeY }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 4 * sizeX, y: 3 * sizeY }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 5 * sizeX, y: 3 * sizeY }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 6 * sizeX, y: 3 * sizeY }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 7 * sizeX, y: 3 * sizeY }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...firstLevelEnemy, pos: { x: 8 * sizeX, y: 3 * sizeY }, subtype: ElementEnemySubtype.BLUE }),
        ]
    }),

    new LevelClass({
        shootInterval: 1500,
        enemies: [
            new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 2, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 3, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 4, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 5, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 6, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 7, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 8, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),

            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 2, y: 1 }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 3, y: 1 }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 4, y: 1 }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 5, y: 1 }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 6, y: 1 }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 7, y: 1 }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 8, y: 1 }, subtype: ElementEnemySubtype.RED }),

            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 2, y: 2 }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 3, y: 2 }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 4, y: 2 }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 5, y: 2 }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 6, y: 2 }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 7, y: 2 }, subtype: ElementEnemySubtype.BLUE }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 8, y: 2 }, subtype: ElementEnemySubtype.BLUE }),

            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 2, y: 3 }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 3, y: 3 }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 4, y: 3 }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 5, y: 3 }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 6, y: 3 }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 7, y: 3 }, subtype: ElementEnemySubtype.RED }),
            // new ElementEnemyRegularClass({ ...secondLevelEnemy, pos: { x: 8, y: 3 }, subtype: ElementEnemySubtype.RED }),
        ]
    }),

    new LevelClass({
        shootInterval: 1000,
        enemies: [
            new ElementEnemyRegularClass({ unit: UNIT, speed: speeds[2], moveSequence: moveSequence[2], pos: { x: 5, y: 0 }, subtype: ElementEnemySubtype.BOSS, strength: 15, score: 300 }),
        ]
    }),

];