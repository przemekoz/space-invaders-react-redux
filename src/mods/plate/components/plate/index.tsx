import React from "react";
import { PlateInterface, PlayerMoveDirection, PlateClassRenderInterface, ElemenInterfaceOrNull } from "../../types";
import { ElementComponent } from "../../../element/components/element";

interface Props {
    plate: PlateInterface;
}

interface State {
    stats: string;
    listOfElements: PlateClassRenderInterface;
}

export class PlateComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            stats: "",
            listOfElements: [],
        };
    }

    componentDidMount() {
        this.renderPlate();
    }

    private refreshStats() {
        this.setState({ stats: this.props.plate.getStats() })
    }

    renderPlate() {
        this.setState({ listOfElements: this.props.plate.render() })
        this.refreshStats();
    }

    findCollision() {
        //
        this.refreshStats();
    }

    enemyShoot() {
        this.refreshStats();
    }

    playerShoot() {
        this.props.plate.playerShoot();
        this.refreshStats();
    }

    calculateNextPos() {
        this.props.plate.calculateNextPos();
        this.refreshStats();
    }

    movePlayerLeft() {
        this.props.plate.movePlayer(PlayerMoveDirection.LEFT);
        this.refreshStats();
    }

    movePlayerRight() {
        this.props.plate.movePlayer(PlayerMoveDirection.RIGHT);
        this.refreshStats();
    }

    public render() {
        const { listOfElements, stats } = this.state;
        return (
            <>
                I'm the Plate
                <div>
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
                                <button onClick={this.calculateNextPos.bind(this)}>calculate next pos</button>
                                <button onClick={this.findCollision.bind(this)}>check collisions</button>
                                <button onClick={this.renderPlate.bind(this)}>render</button>
                            </div>
                        </div>

                    </div>
                    <div style={{ float: 'left', width: '40%', textAlign: 'left', paddingLeft: '1em' }}>
                        <small>
                            <pre>
                                {stats}
                            </pre>
                        </small>
                    </div>
                </div>
            </>
        )
    }
}
