import React from 'react';
import { ElementKaBoomInterface } from '../types';
import { ElementKaBoomEnemyClass } from '../../elementKaBoomEnemy/classes';
import { KaBoomEnemyComponent } from '../../elementKaBoomEnemy/components';

export interface Props {
    element: ElementKaBoomInterface;
}

export const KaBoomComponent = (props: Props) => {
    const { element } = props;

    const renderType = () => {
        switch (true) {
            case element instanceof ElementKaBoomEnemyClass:
                return <KaBoomEnemyComponent element={element} />;

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