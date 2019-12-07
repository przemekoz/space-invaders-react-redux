import {
    ElementInterface,
    ElementTypeEnum,
    ElementMoveDirection
} from "../types";
import { Pos } from "../../shared/types";

export interface Params {
    pos: Pos;
    speed: number;
    sizeX: number;
    sizeY: number;
    type: ElementTypeEnum;
    moveSequence: ElementMoveDirection[];
}

export class ElementClass implements ElementInterface {
    private id = 0;
    private pos: Pos;
    private nextPos: Pos;
    private speed: number;
    private type: ElementTypeEnum;
    private moveOffset = 0;
    private moveSequence: ElementMoveDirection[];
    private sizeX: number;
    private sizeY: number;

    private static idCounter = 0;

    constructor(params: Params) {
        this.pos = params.pos;
        this.nextPos = params.pos;
        this.type = params.type;
        this.speed = params.speed;
        this.sizeX = params.sizeX;
        this.sizeY = params.sizeY;
        this.moveSequence = params.moveSequence;
        this.id = ElementClass.idCounter;
        ElementClass.idCounter++;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }

    public getArea(): string[] {
        // return indexes taken by element
        // area has for pos x=1, y=2, and sizeX = 2, sizeY = 3
        //  [12, 22, 32, 
        //   13, 23, 33, 
        //   14, 24, 34,
        //   15, 25, 35]
        // 
        const area = [];
        for (let y = 0; y <= this.sizeY; y++) {
            for (let x = 0; x <= this.sizeX; x++) {
                const value = `${this.pos.x + x}x${this.pos.y + y}`;
                if (area.includes(value) === false) {
                    area.push(value);
                }
            }
        }
        // for (let i = 0; i <= this.sizeX; i++) {
        //     const value = (this.nextPos.x + i) * 10 + this.nextPos.y;
        //     if (area.includes(value) === false) {
        //         area.push(value);
        //     }
        // }
        // for (let i = 0; i <= this.sizeY; i++) {
        //     const value = this.nextPos.x * 10 + this.nextPos.y + i;
        //     if (area.includes(value) === false) {
        //         area.push(value);
        //     }
        // }
        return area;
    }

    public getPos(): Pos {
        return this.pos;
    }

    public getNextPos(): Pos {
        return this.pos;
    }

    public setPosX(x: number) {
        this.pos.x = x;
    }

    public setPosY(y: number) {
        this.pos.y = y;
    }

    public setNextPosX(x: number) {
        this.nextPos.x = x;
    }

    public setNextPosY(y: number) {
        this.nextPos.y = y;
    }

    public isPos(x: number, y: number): boolean {
        return this.pos.x === x && this.pos.y === y;
    }

    public isPosWithSize(x: number, y: number): boolean {
        if (this.pos.x === x && this.pos.y === y) {
            return true;
        }
        else if (this.nextPos.x === x && this.nextPos.y === y) {
            return true;
        }
        let isPos = false;
        for (let Y = 0; Y < this.sizeY; Y++) {
            for (let X = 0; X < this.sizeX; X++) {
                if (this.pos.x === x + X && this.pos.y === y + Y) {
                    isPos = true;
                    break;
                }
                if (this.nextPos.x === x + X && this.nextPos.y === y + Y) {
                    isPos = true;
                    break;
                }
            }
            if (isPos) {
                break;
            }
        }
        return isPos;
    }

    // public isNextPos(x: number, y: number): boolean {
    //     return this.nextPos.x === x && this.nextPos.y === y;
    // }

    public getType(): ElementTypeEnum {
        return this.type;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public getSizeX(): number {
        return this.sizeX;
    }

    public getSizeY(): number {
        return this.sizeY;
    }

    public setPosition() {
        this.pos = this.nextPos;
    }

    public setNextPosition() {
        const length = this.moveSequence.length;
        if (length) {
            if (this.moveOffset >= length) {
                this.moveOffset = 0;
            }
            const { x, y } = this.getPos();

            switch (this.moveSequence[this.moveOffset]) {
                case ElementMoveDirection.LEFT:
                    this.setNextPosX(x - 1);
                    break;

                case ElementMoveDirection.RIGHT:
                    this.setNextPosX(x + 1);
                    break;

                case ElementMoveDirection.UP:
                    this.setNextPosY(y - 1);
                    break;

                case ElementMoveDirection.DOWN:
                    this.setNextPosY(y + 1);
                    break;

                case ElementMoveDirection.LEFT_UP:
                    this.setNextPosX(x - 1);
                    this.setNextPosY(y - 1);
                    break;

                case ElementMoveDirection.LEFT_DOWN:
                    this.setNextPosX(x - 1);
                    this.setNextPosY(y + 1);
                    break;

                case ElementMoveDirection.RIGHT_UP:
                    this.setNextPosX(x + 1);
                    this.setNextPosY(y - 1);
                    break;

                case ElementMoveDirection.RIGHT_DOWN:
                    this.setNextPosX(x + 1);
                    this.setNextPosY(y + 1);
                    break;
            }
            this.moveOffset++;
        }
    }
}