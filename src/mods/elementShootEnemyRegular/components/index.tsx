import React from 'react';
import image from '../images/enemyShoot48.png';

export const ShootEnemyRegularComponent = () => {
    return (
        <img src={image} width="12" height="24" alt="this is the enemy's shoot" style={{ border: "1px solid red" }} />
    );
};
