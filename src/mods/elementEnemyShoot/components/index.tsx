import React from 'react';
import image from '../images/enemyShoot48.png';

interface Props {

}

export const EnemyShootComponent = (props: Props) => {
    return (
        <img src={image} width="48" height="48" alt="this is the enemy's shoot" />
    );
} 