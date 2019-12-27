import React from 'react';
import { ElementShootEnemyRegularClass } from '../../elementShootEnemyRegular/classes';
import { ShootEnemyRegularComponent } from '../../elementShootEnemyRegular/components';
import { ElementShootEnemyInterface } from '../types';

export interface Props {
    element: ElementShootEnemyInterface;
}

export const ShootEnemyComponent = (props: Props) => {
    const { element } = props;

    const renderType = () => {
        switch (true) {
            case element instanceof ElementShootEnemyRegularClass:
                return <ShootEnemyRegularComponent />;

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