import { Pos } from "../../shared/types";
import { ElementKaBoomAbstract } from "../../elementKaBoom/classes";

interface Params {
  pos: Pos;
  tick: number;
}

export class ElementKaBoomEnemyClass extends ElementKaBoomAbstract {
  constructor( params: Params ) {
    const UNIT = 2;
    super( {
      sizeX: 48 / UNIT,
      sizeY: 48 / UNIT,
      pos: params.pos,
      speed: 1
    } );
    this.phase = 0;
    this.tick = params.tick;
  }
}