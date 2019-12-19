import React from 'react';
import enemy from '../images/enemyNormal48.png';
import enemySmall from '../images/enemyNormalSmall48.png';
import { AnimationComponent } from '../../shared/components/animation';

export const EnemyBlueComponent = () => {
    return <AnimationComponent images={[enemy, enemySmall]} />;
};
