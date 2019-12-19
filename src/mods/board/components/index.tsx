import React from "react";
import { ElementMoveDirection } from "../../element/types";
import { UNIT } from "../../game/config/levels";
import { ElementComponent, ElementType } from "../../element/components";
import { GameInterface } from "../../game/types";

interface Props {
    game: GameInterface;
    listOfElements: ElementType[];
}

export class BoardComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        const { game } = this.props;
        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case 37:
                    game.movePlayer(ElementMoveDirection.LEFT);
                    break;

                case 39:
                    game.movePlayer(ElementMoveDirection.RIGHT);
                    break;

                case 17:
                    game.playerShoot();
                    break;

                default:
                    // no action needed
                    break;
            }
        });
    }

    public componentDidMount() { }

    public handleClick() { }

    public render() {
        const { listOfElements } = this.props;
        return (
            <div>
                <div style={{ float: 'left', width: '500px', height: '500px', position: 'relative' }}>
                    {listOfElements.map((element: ElementType, index: number) =>
                        <div style={{ position: 'absolute', top: `${element.getPos().y * UNIT}px`, left: `${element.getPos().x * UNIT}px` }} key={index}>
                            <ElementComponent element={element} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
