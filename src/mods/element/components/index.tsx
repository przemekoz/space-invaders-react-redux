import React from "react";
import { ElementEnemyAbstract } from "../../elementEnemy/classes";
import { ElementPlayerAbstract } from "../../elementPlayer/classes";
import { EnemyComponent } from "../../elementEnemy/components";
import { ElementEnemyInterface } from "../../elementEnemy/types";
import { ElementKaBoomInterface } from "../../elementKaBoom/types";
import { ElementKaBoomAbstract } from "../../elementKaBoom/classes";
import { KaBoomComponent } from "../../elementKaBoom/components";
import { PlayerComponent } from "../../elementPlayer/components";
import { ElementPlayerInterface } from "../../elementPlayer/types";

export type ElementType = ElementEnemyInterface | ElementKaBoomInterface | ElementPlayerInterface;

export interface Props {
    element: ElementType;
}

export const ElementComponent = (props: Props) => {

    const { element } = props;

    const renderType = () => {
        switch (true) {
            case element instanceof ElementEnemyAbstract: {
                const elem = element as ElementEnemyInterface;
                return <EnemyComponent element={elem} />;
            }

            // case element instanceof ElementShootPlayerAbstract: {
            //     const element = props.element as ElementShootPlayerAbstract;
            //     return <ShootPlayerComponent element={element} />;
            // }

            // case element instanceof ElementShootEnemyAbstract:
            //     return <EnemyShootComponent element={element} />;

            case element instanceof ElementPlayerAbstract: {
                const elem = element as ElementPlayerInterface;
                return <PlayerComponent element={elem} />;
            }

            case element instanceof ElementKaBoomAbstract: {
                const elem = element as ElementKaBoomInterface;
                return <KaBoomComponent element={elem} />;
            }

            default:
                return null;
        }
    };

    return (
        <div>
            {renderType()}
        </div >

    );
};
