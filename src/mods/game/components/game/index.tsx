import React from "react";
import { GameInterface, GameClassRenderInterface, ElemenInterfaceOrNull } from "../../types";
import { ElementComponent } from "../../../element/components/element";
import { ElementMoveDirection } from "../../../element/types";
import { PlayerComponent } from "../../../elementPlayer/components";

interface Props {
    game: GameInterface;
}

interface State {
    start: boolean;
    listOfElements: GameClassRenderInterface;
}

export class GameComponent extends React.Component<Props, State> {

    private tickInterval: any = null;
    private tickIntervalTime = 50;

    constructor(props: Props) {
        super(props);
        this.state = {
            start: false,
            listOfElements: [],
        };
    }

    componentDidMount() {
        this.renderGame();
    }

    public start() {
        this.tickInterval = setInterval(() => {
            this.props.game.calculateNextPos();
            this.props.game.findCollisions();
            this.renderGame();
        }, this.tickIntervalTime);
    }

    public reset() {
        this.stop();
        this.setState({ start: false, listOfElements: [] });
        this.renderGame();
        this.props.game.reset();
    }

    public stop() {
        clearInterval(this.tickInterval);
    }

    public renderGame() {
        this.setState({ listOfElements: this.props.game.render() })
    }

    public playerShoot() {
        this.props.game.playerShoot();
    }

    public movePlayerLeft() {
        this.props.game.movePlayer(ElementMoveDirection.LEFT);
    }

    public movePlayerRight() {
        this.props.game.movePlayer(ElementMoveDirection.RIGHT);
    }

    public handleKeyPress(event: React.KeyboardEvent<any>) {
        if (event.key === 'ArrowLeft') {
            this.movePlayerLeft();
        }
        else if (event.key === 'ArrowRight') {
            this.movePlayerRight();
        }
        else if (event.key === 'Control') {
            this.playerShoot();
        }
    }

    public render() {
        const { listOfElements } = this.state;
        const { game } = this.props;
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ flex: 1 }}>
                    <div tabIndex={0} onKeyDown={this.handleKeyPress.bind(this)} style={{ outline: 'none' }}>
                        <div style={{ float: 'left', width: '50%' }}>
                            <table>
                                <tbody>
                                    {listOfElements.map((row: ElemenInterfaceOrNull[], index: number) =>
                                        <tr key={index}>
                                            {row.map((element: ElemenInterfaceOrNull, index: number) => (
                                                <td key={index} >
                                                    {element ? <ElementComponent element={element} /> : <div style={{ width: "48px", height: "48px" }}>&nbsp;</div>}
                                                </td>
                                            ))}
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ flex: 1 }}>
                            <p>Score: <strong>{game.getScore()}</strong></p>
                            <p>Level: <strong>{game.getLevel()}</strong></p>
                            {game.isGameWin() ? <p style={{ color: 'green' }}><strong>YOU WIN!</strong></p> : null}
                            {game.isGameOver() ? <p style={{ color: 'red' }}><strong>GAME OVER!</strong></p> : null}
                        </div>
                        <div style={{ flex: 1, marginBottom: '1em' }}>
                            <button style={{ width: '100px', padding: '5px 10px', fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={this.start.bind(this)}>Start</button>
                        </div>
                        <div style={{ flex: 1, marginBottom: '10em' }}>
                            <button style={{ width: '100px', padding: '5px 10px', fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={this.reset.bind(this)}>Reset</button>
                        </div>
                        <div style={{ flex: 1 }}>
                            {this.renderPlayerLifes().map(player => <div style={{ display: 'inline-block', marginRight: '0.5em' }}><PlayerComponent /></div>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private renderPlayerLifes() {
        if (this.props.game.getPlayerLife() > 1) {
            return Array.from(Array(this.props.game.getPlayerLife() - 1).keys());
        } else {
            return [];
        }
    }
}
