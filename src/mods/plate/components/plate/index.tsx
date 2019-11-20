import React from "react";
import { PlateInterface, EnemiesMoveDirection, UserMoveDirection } from "../../types";
import { ElementComponent } from "../../../element/components/element";
import { ElementInterface } from "../../../element/types";

interface Props {
    plate: PlateInterface
}

interface State {
    listOfElements: ElementInterface[][];
}

export class PlateComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            listOfElements: props.plate.listOfElements
        }
    }

    moveEnemiesLeft() {
        this.props.plate.moveEnemies(EnemiesMoveDirection.LEFT);
        this.setState({ listOfElements: this.props.plate.listOfElements })
    }

    moveEnemiesRight() {
        this.props.plate.moveEnemies(EnemiesMoveDirection.RIGHT);
        this.setState({ listOfElements: this.props.plate.listOfElements })
    }

    moveUserLeft() {
        this.props.plate.moveUser(UserMoveDirection.LEFT);
        this.setState({ listOfElements: this.props.plate.listOfElements })
    }

    moveUserRight() {
        this.props.plate.moveUser(UserMoveDirection.RIGHT);
        this.setState({ listOfElements: this.props.plate.listOfElements })
    }

    render() {
        const { listOfElements } = this.state;
        return (
            <>
                I'm the Plate
                <table>
                    <tbody>
                        {listOfElements.map((row: ElementInterface[], index: number) =>
                            <tr key={index}>
                                {row.map((element: ElementInterface, index: number) => <td key={index} ><ElementComponent element={element} /></td>)}
                            </tr>
                        )}
                    </tbody>
                </table>
                <button onClick={this.moveEnemiesLeft.bind(this)}>move enemies: left</button>
                <button onClick={this.moveEnemiesRight.bind(this)}>move enemies: right</button>

                <button onClick={this.moveUserLeft.bind(this)}>move user: left</button>
                <button onClick={this.moveUserRight.bind(this)}>move user: right</button>
            </>
        )
    }
}
