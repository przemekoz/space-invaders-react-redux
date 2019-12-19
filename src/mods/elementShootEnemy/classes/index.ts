import { ElementAbstract } from "../../element/classes";
import { Pos } from "../../shared/types";

export interface Params {
  pos: Pos;
  speed: number;
  sizeX: number;
  sizeY: number;
}

export class ElementShootEnemyAbstract extends ElementAbstract {

  constructor( params: Params ) {
    super( {
      sizeX: params.sizeX,
      sizeY: params.sizeX,
      pos: params.pos,
      speed: params.speed,
    } );
  }

}