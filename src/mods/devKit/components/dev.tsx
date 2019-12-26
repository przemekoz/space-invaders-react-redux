import React from "react";
import { GameInterface } from "../../game/types";
import { ElementMoveDirection } from "../../element/types";

interface Props {
    game: GameInterface;
    renderGame(): void;
}

interface State {
    stats: string;
}

export class GameDevComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            stats: "",
        };
    }

    public findCollisions() {
        this.props.game.findCollisions();
        this.refreshStats();
    }

    public movePlayerLeft() {
        this.props.game.movePlayer(ElementMoveDirection.LEFT);
        this.refreshStats();
    }

    public movePlayerRight() {
        this.props.game.movePlayer(ElementMoveDirection.RIGHT);
        this.refreshStats();
    }


    public enemyShoot() {
        this.props.game.enemyShoot();
        this.refreshStats();
    }

    public tick() {
        this.calculateNextPos();
        this.findCollisions();
    }

    public playerShoot() {
        this.props.game.playerShoot();
        this.refreshStats();
    }

    public calculateNextPos() {
        this.props.game.calculateNextPos();
        this.refreshStats();
    }

    public render() {
        const { stats } = this.state;
        return (
            <>
                <div>
                    <div style={{ width: '100%', background: 'black' }}>
                        player<br />
                        <button onClick={this.movePlayerLeft.bind(this)}>left</button>
                        <button onClick={this.movePlayerRight.bind(this)}>right</button>
                        <button onClick={this.playerShoot.bind(this)}>shoot!</button>
                        <br />
                        <br />
                        enemy<br />
                        <button onClick={this.enemyShoot.bind(this)}>shoot!</button>
                        <br />
                        <br />

                        actions<br />
                        <button onClick={this.tick.bind(this)}>tick ! (1,2,3)</button><br />
                        <button onClick={this.calculateNextPos.bind(this)}>1. calculate next pos</button><br />
                        <button onClick={this.findCollisions.bind(this)}>2. check collisions</button><br />
                        <br />
                    </div>
                </div>
                <div style={{ float: 'left', width: '20%', textAlign: 'left', paddingLeft: '1em', background: 'black' }}>
                    <small>
                        <pre>
                            {stats}
                        </pre>
                    </small>
                </div>
            </>
        )
    }

    private refreshStats() {
        this.setState({ stats: this.props.game.getStats() })
        this.props.renderGame();
    }
}
