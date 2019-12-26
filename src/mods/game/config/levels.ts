import { LevelClass } from "../../level/classes";
import { ElementMoveDirection } from "../../element/types";
import { ElementEnemyBlueClass } from "../../elementEnemyBlue/classes";
import { ElementEnemyRedClass } from "../../elementEnemyRed/classes";
import { ElementEnemyChiefClass } from "../../elementEnemyChief/classes";

export const UNIT = 12; // 2px is one unit

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
const firstLevelEnemy = { speed: 80, moveSequence: moveSequence[0] };
const secondLevelEnemy = { speed: 70, moveSequence: moveSequence[1] };

export const GAME_LEVELS = [

    new LevelClass({
        // TEST !
        shootInterval: 25000,
        enemies: [
            new ElementEnemyBlueClass({ ...firstLevelEnemy, pos: { x: 4 * sizeX, y: 0 } }),
            new ElementEnemyRedClass({ ...firstLevelEnemy, pos: { x: 2 * sizeX, y: 7 * sizeY } }),
        ]
    }),

    new LevelClass({
        shootInterval: 15000,
        enemies: [
            new ElementEnemyChiefClass({ ...secondLevelEnemy, pos: { x: 2, y: 0 } }),
        ]
    }),

];