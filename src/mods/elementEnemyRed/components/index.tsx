import React from 'react';
import enemyRed from '../images/enemyRed48.png';
import enemyRedSmall from '../images/enemyRedSmall48.png';
import { AnimationComponent } from '../../shared/components/animation';

export const EnemyRedComponent = () => {
    return <AnimationComponent images={[enemyRed, enemyRedSmall]} />;
};
