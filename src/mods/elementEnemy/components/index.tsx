import React from 'react';
import { ElementEnemyBlueClass } from "../../elementEnemyBlue/classes";
import { EnemyBlueComponent } from "../../elementEnemyBlue/components";
import { EnemyChiefComponent } from '../../elementEnemyChief/components';
import { EnemyRedComponent } from '../../elementEnemyRed/components';
import { EnemyBossComponent } from '../../elementEnemyBoss/components';
import { ElementEnemyRedClass } from '../../elementEnemyRed/classes';
import { ElementEnemyChiefClass } from '../../elementEnemyChief/classes';
import { ElementEnemyBossClass } from '../../elementEnemyBoss/classes';
import { ElementEnemyInterface } from '../types';

export interface Props {
    element: ElementEnemyInterface;
}

export const EnemyComponent = (props: Props) => {
    const { element } = props;

    const renderType = () => {
        switch (true) {
            case element instanceof ElementEnemyBlueClass:
                return <EnemyBlueComponent />;

            case element instanceof ElementEnemyRedClass:
                return <EnemyRedComponent />;

            case element instanceof ElementEnemyChiefClass:
                return <EnemyChiefComponent element={element} />;

            case element instanceof ElementEnemyBossClass:
                return <EnemyBossComponent element={element} />;

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