import React from "react";
import { GameInterface, PlayerMoveDirection, GameClassRenderInterface, ElemenInterfaceOrNull } from "../../types";
import { ElementComponent } from "../../../element/components/element";

interface Props {
    game: GameInterface;
}

interface State {
    stats: string;
    listOfElements: GameClassRenderInterface;
}


export class GameComponent extends React.Component<Props, State> {

    private tickInterval: any = null;
    private tickIntervalTime = 50;

    constructor(props: Props) {
        super(props);
        this.state = {
            stats: "",
            listOfElements: [],
        };
    }

    componentDidMount() {
        this.renderGame();
        this.tickInterval = setInterval(() => {
            this.tick();
        }, this.tickIntervalTime);
    }

    public renderGame() {
        this.setState({ listOfElements: this.props.game.render() })
        this.refreshStats();
    }

    public findCollisions() {
        this.props.game.findCollisions();
        this.refreshStats();
    }

    public enemyShoot() {
        this.props.game.enemyShoot();
        this.refreshStats();
    }

    public tick() {
        this.calculateNextPos();
        this.findCollisions();
        this.renderGame();
    }

    public playerShoot() {
        this.props.game.playerShoot();
        this.refreshStats();
    }

    public calculateNextPos() {
        this.props.game.calculateNextPos();
        this.refreshStats();
    }

    public movePlayerLeft() {
        this.props.game.movePlayer(PlayerMoveDirection.LEFT);
        this.refreshStats();
    }

    public movePlayerRight() {
        this.props.game.movePlayer(PlayerMoveDirection.RIGHT);
        this.refreshStats();
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
        const { listOfElements, stats } = this.state;
        return (
            <>
                I'm the Game
                <div tabIndex={0} onKeyDown={this.handleKeyPress.bind(this)}>
                    <div style={{ float: 'left', width: '50%' }}>
                        <table>
                            <tbody>
                                {listOfElements.map((row: ElemenInterfaceOrNull[], index: number) =>
                                    <tr key={index}>
                                        {row.map((element: ElemenInterfaceOrNull, index: number) => (
                                            <td key={index} >
                                                {element ? <ElementComponent element={element} /> : <div style={{ width: "10px", height: "10px" }}>.</div>}
                                            </td>
                                        ))}
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <br />
                        <br />
                        <div style={{ width: '100%' }}>
                            <div style={{ float: 'left', width: '25%', textAlign: 'left', paddingLeft: '1em' }}>
                                player<br />
                                <button onClick={this.movePlayerLeft.bind(this)}>left</button>
                                <button onClick={this.movePlayerRight.bind(this)}>right</button>
                                <button onClick={this.playerShoot.bind(this)}>shoot!</button>
                            </div>
                            <div style={{ float: 'left', width: '25%', textAlign: 'left', paddingLeft: '1em' }}>
                                enemy<br />
                                <button onClick={this.enemyShoot.bind(this)}>shoot!</button>
                            </div>
                            <div style={{ float: 'left', width: '25%', textAlign: 'left', paddingLeft: '1em' }}>

                                actions<br />
                                <button onClick={this.tick.bind(this)}>tick ! (1,2,3)</button><br />
                                <button onClick={this.calculateNextPos.bind(this)}>1. calculate next pos</button><br />
                                <button onClick={this.findCollisions.bind(this)}>2. check collisions</button><br />
                                <button onClick={this.renderGame.bind(this)}>3. render</button><br />
                            </div>
                        </div>

                    </div>
                    <div style={{ float: 'left', width: '40%', textAlign: 'left', paddingLeft: '1em' }}>
                        <small>
                            <pre>
                                tickInterval: {this.tickIntervalTime}ms
                                {stats}
                            </pre>
                        </small>
                    </div>
                </div>
            </>
        )
    }

    private stop() {
        clearInterval(this.tickInterval);
    }

    private refreshStats() {
        this.setState({ stats: this.props.game.getStats() })
    }
}
