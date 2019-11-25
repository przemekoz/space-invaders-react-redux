import React from 'react';
import enemy from '../images/enemyNormal48.png';
import enemySmall from '../images/enemyNormalSmall48.png';
import enemyRed from '../images/enemyRed48.png';
import enemyRedSmall from '../images/enemyRedSmall48.png';
import { ElementEnemyInterface, ElementEnemySubtype } from '../types';
import { EnemyAnimationComponent } from './animation';

interface Props {
    element: ElementEnemyInterface
}

export const EnemyComponent = (props: Props) => {

    switch (props.element.getSubType()) {
        case ElementEnemySubtype.BLUE:
            return <EnemyAnimationComponent images={[enemy, enemySmall]} />;

        case ElementEnemySubtype.RED:
            return <EnemyAnimationComponent images={[enemyRed, enemyRedSmall]} />;

        default:
            return null;
    }

};
