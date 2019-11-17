import React from "react";
import { PlateInterface } from "../../types";
import { ElementComponent } from "../../../element/components/element";
import { ElementInterface } from "../../../element/types";

export interface Props {
    plate: PlateInterface
}

export const PlateComponent = (props: Props) => {
    const { plate } = props
    return (
        <>
            I'm the Plate
            <table>
                <tbody>
                    {plate.listOfElements.map((row: ElementInterface[], index: number) =>
                        <tr key={index}>
                            {row.map((element: ElementInterface, index: number) => <td key={index} ><ElementComponent element={element} /></td>)}
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
};