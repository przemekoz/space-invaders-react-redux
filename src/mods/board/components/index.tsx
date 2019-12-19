import React from "react";
import { ElementInterface, ElementMoveDirection } from "../../element/types";
import { UNIT } from "../../game/config/levels";
import { ElementComponent } from "../../element/components";
import { GameInterface } from "../../game/types";

interface State {
  isProgress: boolean;
}

interface Props {
  game: GameInterface;
  listOfElements: ElementInterface[];
}

export class BoardComponent extends React.Component<Props, State> {
  constructor( props: Props ) {
    super( props );
    this.state = { isProgress: false };
    const { game } = this.props;
    document.addEventListener( 'keydown', event => {
      switch ( event.keyCode ) {
        case 37:
          game.movePlayer( ElementMoveDirection.LEFT );
          break;

        case 39:
          game.movePlayer( ElementMoveDirection.RIGHT );
          break;

        case 17:
          game.playerShoot();
          break;

        default:
          // no action needed
          break;
      }
    } );
  }

  public componentDidMount() { }

  public handleClick() { }

  public render() {
    const { listOfElements } = this.props;
    const { isProgress } = this.state;
    return (
      <div>
        <div style={{ float: 'left', width: '500px', height: '500px', position: 'relative' }}>
          {listOfElements.map( ( element: ElementInterface, index: number ) =>
            <div style={{ position: 'absolute', top: `${element.getPos().y * UNIT}px`, left: `${element.getPos().x * UNIT}px` }} key={index}>
              <ElementComponent element={element} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
