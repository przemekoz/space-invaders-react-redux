import React from "react";
import { PlateInterface, EnemiesMoveDirection } from "../../types";
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

    moveLeft() {
        this.props.plate.moveEnemies(EnemiesMoveDirection.LEFT);
        this.setState({ listOfElements: this.props.plate.listOfElements })
    }

    moveRight() {
        this.props.plate.moveEnemies(EnemiesMoveDirection.RIGHT);
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
                <button onClick={this.moveLeft.bind(this)}>move left</button>
                <button onClick={this.moveRight.bind(this)}>move right</button>
            </>
        )
    }
}
