import { Pos } from "../../shared/types";
import { UNIT } from "../../game/config/levels";
import { ElementShootPlayerAbstract } from "../../elementShootPlayer/classes";

interface Params {
  pos: Pos;
}

export class ElementPlayerShootClass extends ElementShootPlayerAbstract {

  constructor( params: Params ) {
    const sizeX = 48 / UNIT;
    const sizeY = 48 / UNIT;
    super( {
      sizeX,
      sizeY,
      speed: 1,
      pos: { x: params.pos.x + Math.floor( sizeX / 2 ), y: params.pos.y - sizeY },
    } );
  }
}