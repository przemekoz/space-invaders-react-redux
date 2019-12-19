import React from 'react';
import { ElementEnemyInterface } from '../../elementEnemy/types';
import { AnimationComponent } from '../../shared/components/animation';
import enemyChief from '../images/enemyChiefNormal48.png';
import enemyChiefSmall from '../images/enemyChiefNormalSmall48.png';
import enemyChiefWeak from '../images/enemyChiefWeak48.png';
import enemyChiefWeakSmall from '../images/enemyChiefWeakSmall48.png';

interface Props {
    element: ElementEnemyInterface
}

export const EnemyChiefComponent = ( props: Props ) => {
    return props.element.getStrength() === 2 ?
        <AnimationComponent images={[ enemyChief, enemyChiefSmall ]} /> :
        <AnimationComponent images={[ enemyChiefWeak, enemyChiefWeakSmall ]} />;
};
