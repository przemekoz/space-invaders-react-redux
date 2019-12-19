import React from 'react';
import enemyBoss from '../images/boss240.png';
import enemyBossRedEyes from '../images/bossRedEyes240.png';
import { ElementEnemyInterface } from '../../elementEnemy/types';
import { AnimationComponent } from '../../shared/components/animation';

interface Props {
    element: ElementEnemyInterface
}

export const EnemyBossComponent = (props: Props) => {
    return <AnimationComponent images={[enemyBoss, enemyBossRedEyes]} />;
};
