import React from "react";
import { ElementEnemyAbstract } from "../../elementEnemy/classes";
import { ElementShootPlayerAbstract } from "../../elementShootPlayer/classes";
import { ElementShootEnemyAbstract } from "../../elementShootEnemy/classes";
import { ElementPlayerAbstract } from "../../elementPlayer/classes";
import { EnemyComponent } from "../../elementEnemy/components";
import { ShootPlayerComponent } from "../../elementShootPlayerRegular/components";
import { ElementEnemyInterface } from "../../elementEnemy/types";
import { ElementKaBoomInterface } from "../../elementKaBoom/types";
import { ElementKaBoomAbstract } from "../../elementKaBoom/classes";

type ElementType = ElementEnemyInterface | ElementKaBoomInterface;

export interface Props {
    element: ElementType;
}

export const ElementComponent = (props: Props) => {

    const renderType = () => {
        switch (true) {
            case element instanceof ElementEnemyAbstract: {
                const element = props.element as ElementEnemyInterface;
                return <EnemyComponent element={element} />;
            }

            // case element instanceof ElementShootPlayerAbstract: {
            //     const element = props.element as ElementShootPlayerAbstract;
            //     return <ShootPlayerComponent element={element} />;
            // }

            // case element instanceof ElementShootEnemyAbstract:
            //     return <EnemyShootComponent element={element} />;

            // case element instanceof ElementPlayerAbstract:
            //     return <PlayerComponent element={element} />;

            case element instanceof ElementKaBoomAbstract: {
                const element = props.element as ElementKaBoomInterface;
                return <KaBoomComponent element={element} />;
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
