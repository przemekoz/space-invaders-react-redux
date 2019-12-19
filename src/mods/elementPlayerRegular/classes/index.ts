import { Pos } from "../../shared/types";
import { ElementPlayerAbstract } from "../../elementPlayer/classes";

interface Params {
  pos: Pos;
}

export class ElementPlayerRegularClass extends ElementPlayerAbstract {

  constructor( params: Params ) {
    const UNIT = 2;
    const sizeX = 48 / UNIT;
    const sizeY = 48 / UNIT;
    super( {
      sizeX,
      sizeY,
      speed: 1,
      pos: params.pos,
    } );
  }
}