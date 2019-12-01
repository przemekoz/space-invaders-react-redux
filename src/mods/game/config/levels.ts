import { LevelClass } from "../../level/classes";
import { ElementEnemyClass } from "../../elementEnemy/classes";
import { ElementEnemySubtype } from "../../elementEnemy/types";
import { ElementMoveDirection } from "../../element/types";


const speeds = [81, 41, 21];
const moveSequence = [
    [
        ElementMoveDirection.RIGHT,
        ElementMoveDirection.LEFT,
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

export const GAME_LEVELS = [

    new LevelClass({
        shootInterval: 3000,
        enemies: [
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 2, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 3, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 4, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 5, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 6, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 7, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 8, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),

            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 2, y: 1 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 3, y: 1 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 4, y: 1 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 5, y: 1 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 6, y: 1 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 7, y: 1 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 8, y: 1 }, subtype: ElementEnemySubtype.BLUE }),

            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 2, y: 2 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 3, y: 2 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 4, y: 2 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 5, y: 2 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 6, y: 2 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 7, y: 2 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 8, y: 2 }, subtype: ElementEnemySubtype.RED }),

            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 2, y: 3 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 3, y: 3 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 4, y: 3 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 5, y: 3 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 6, y: 3 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 7, y: 3 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[0], moveSequence: moveSequence[0], pos: { x: 8, y: 3 }, subtype: ElementEnemySubtype.BLUE }),
        ]
    }),

    new LevelClass({
        shootInterval: 1500,
        enemies: [
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 2, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 3, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 4, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 5, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 6, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 7, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 8, y: 0 }, subtype: ElementEnemySubtype.CHIEF }),

            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 2, y: 1 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 3, y: 1 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 4, y: 1 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 5, y: 1 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 6, y: 1 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 7, y: 1 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 8, y: 1 }, subtype: ElementEnemySubtype.RED }),

            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 2, y: 2 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 3, y: 2 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 4, y: 2 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 5, y: 2 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 6, y: 2 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 7, y: 2 }, subtype: ElementEnemySubtype.BLUE }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 8, y: 2 }, subtype: ElementEnemySubtype.BLUE }),

            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 2, y: 3 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 3, y: 3 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 4, y: 3 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 5, y: 3 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 6, y: 3 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 7, y: 3 }, subtype: ElementEnemySubtype.RED }),
            new ElementEnemyClass({ speed: speeds[1], moveSequence: moveSequence[1], pos: { x: 8, y: 3 }, subtype: ElementEnemySubtype.RED }),
        ]
    }),

    new LevelClass({
        shootInterval: 1000,
        enemies: [
            new ElementEnemyClass({ speed: speeds[2], moveSequence: moveSequence[2], pos: { x: 5, y: 0 }, subtype: ElementEnemySubtype.BOSS, strength: 15, score: 300 }),
        ]
    }),

];