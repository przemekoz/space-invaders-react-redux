import React from "react";
import { GameInterface } from "../../types";
import { ElementComponent } from "../../../element/components/element";
import { ElementMoveDirection, ElementInterface } from "../../../element/types";
import { PlayerComponent } from "../../../elementPlayer/components";
import { UNIT } from "../../config/levels";
import { GameDevComponent } from "./dev";

interface Props {
    game: GameInterface;
}

interface State {
    start: boolean;
    devMode: boolean;
    listOfElements: ElementInterface[];
}

export class GameComponent extends React.Component<Props, State> {

    private tickInterval: any = null;
    private tickIntervalTime = 1000;

    constructor(props: Props) {
        super(props);
        this.state = {
            start: false,
            devMode: window.location.search === '?dev',
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
        clearInterval(this.tickInterval);
        this.setState({ start: false, listOfElements: [] });
        // this.renderGame();
        this.props.game.reset();
    }

    public renderGame() {
        this.setState({ listOfElements: this.props.game.getElements() })
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
                    <input type="text" style={{ width: "20px", background: 'white', border: 'none' }} autoFocus onKeyDown={this.handleKeyPress.bind(this)} />
                    <div tabIndex={0}>
                        <div onKeyDown={this.handleKeyPress.bind(this)} style={{ outline: 'none', float: 'left', width: '500px', height: '500px', position: 'relative' }}>
                            {listOfElements.map((element: ElementInterface, index: number) =>
                                <div style={{ position: 'absolute', top: `${element.getPos().y * UNIT}px`, left: `${element.getPos().x * UNIT}px` }} key={index}>
                                    <ElementComponent element={element} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ flex: 1, textAlign: 'left', marginBottom: '1em' }}>
                            <p>Score: <strong>{game.getScore()}</strong></p>
                            <p>Level: <strong>{game.getLevel()}</strong></p>
                        </div>
                        <div style={{ flex: 1, marginBottom: '8em' }}>
                            {this.renderPlayerLifes().map(playerIndex => <div key={playerIndex} style={{ display: 'inline-block', marginRight: '0.5em' }}><PlayerComponent /></div>)}
                        </div>
                        <div style={{ flex: 1, marginBottom: '1em' }}>
                            <button style={{ width: '100px', padding: '5px 10px', fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={this.start.bind(this)}>START</button>
                        </div>
                        <div style={{ flex: 1, marginBottom: '1em' }}>
                            <button style={{ width: '100px', padding: '5px 10px', fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={this.reset.bind(this)}>RESET</button>
                        </div>

                        <div style={{ flex: 1, textAlign: 'left' }}>
                            {this.tickInterval === null ?
                                <div>
                                    <h3>Press START button!</h3>
                                    <p><small>Move left: left arrow</small></p>
                                    <p><small>Move right: right arrow</small></p>
                                    <p><small>Shoot: Ctrl</small></p>
                                </div>
                                : null}

                            {game.isGameWin() ? <h2 style={{ color: 'green', padding: '1em', border: '1px solid white', borderRadius: '0.5em', textAlign: 'center' }}>WELL DONE! YOU WIN!</h2> : null}
                            {game.isGameOver() ? <h2 style={{ color: 'red', padding: '1em', border: '1px solid white', borderRadius: '0.5em', textAlign: 'center' }}>GAME OVER! YOU LOSE!</h2> : null}
                        </div>
                    </div>
                </div>
                {this.state.devMode && <GameDevComponent game={this.props.game} renderGame={this.renderGame.bind(this)} />}
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
