import React from "react";
import { ElementInterface, ElementTypeEnum } from "../../types";
import { PlayerComponent } from "../../../elementPlayer/components";
import { PlayerShootComponent } from "../../../elementPlayerShoot/components";
import { EnemyShootComponent } from "../../../elementEnemyShoot/components";
import { EnemyComponent } from "../../../elementEnemy/components";
import { KaBoomComponent } from "../../../elementKaBoom/components";
import { ElementEnemyInterface } from "../../../elementEnemy/types";
import { ElementEnemyClass } from "../../../elementEnemy/classes";
import { ElementKaBoomClass } from "../../../elementKaBoom/classes";

export interface Props {
    element: ElementInterface | ElementEnemyInterface;
}

export const ElementComponent = (props: Props) => {
    const { element } = props;

    const renderType = () => {
        switch (element.getType()) {
            case ElementTypeEnum.ENEMY:
                if (element instanceof ElementEnemyClass) {
                    return <EnemyComponent element={element} />;
                } else {
                    return null;
                }

            case ElementTypeEnum.SHOT_ENEMY:
                return <EnemyShootComponent />;

            case ElementTypeEnum.SHOT_PLAYER:
                return <PlayerShootComponent />;

            case ElementTypeEnum.PLAYER:
                return <PlayerComponent />;

            case ElementTypeEnum.KA_BOOM:
                if (element instanceof ElementKaBoomClass) {
                    return <KaBoomComponent element={element} />;
                } else {
                    return null;
                }

            default:
                return null;
        }
    };

    return (
        <div style={{ width: "10px", height: "10px" }}>
            {renderType()}
        </div >

    );
};
