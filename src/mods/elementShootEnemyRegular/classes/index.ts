import { Pos } from "../../shared/types";
import { ElementShootEnemyAbstract } from "../../elementShootEnemy/classes";

interface Params {
  pos: Pos;
}

export class ElementShootEnemyRegularClass extends ElementShootEnemyAbstract {
  constructor( params: Params ) {
    const UNIT = 2;
    const sizeX = 48 / UNIT;
    const sizeY = 48 / UNIT;
    super( {
      sizeX,
      sizeY,
      speed: 1,
      pos: { x: params.pos.x + Math.floor( sizeX / 2 ), y: params.pos.y + sizeY },
    } );
  }
}
