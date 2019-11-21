import React from "react";
import { ElementInterface, ElementTypeEnum } from "../../types";

export interface Props {
    element: ElementInterface;
}

export const ElementComponent = (props: Props) => {
    const { element } = props;

    const renderType = () => {
        switch (element.getType()) {
            case ElementTypeEnum.ENEMY:
                return "#";

            case ElementTypeEnum.SHOT_ENEMY:
                return "!";

            case ElementTypeEnum.SHOT_PLAYER:
                return "|";

            case ElementTypeEnum.PLAYER:
                return "^";

            case ElementTypeEnum.KA_BOOM:
                return "*";

            default:
                return ".";
        }
    };

    return (
        <div style={{ width: "10px", height: "10px" }}>
            {renderType()}
        </div >

    );
};
