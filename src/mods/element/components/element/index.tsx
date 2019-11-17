import React from "react";
import { ElementInterface, ElementTypeEnum } from "../../types";

export interface Props {
    element: ElementInterface
}

export const ElementComponent = (props: Props) => {
    const { element } = props;

    const renderType = () => {
        switch (element.type) {
            case ElementTypeEnum.ENEMY:
                return "#"

            case ElementTypeEnum.SHOT:
                return "|"

            case ElementTypeEnum.USER:
                return "^"

            default:
                return ".";
        }
    }


    return (
        <div style={{
            width: "10px", height: "10px"
        }}>
            {renderType()}
        </div >

    )
};
