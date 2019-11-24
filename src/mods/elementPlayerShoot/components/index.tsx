import React from 'react';
import image from '../images/playerShoot48.png';

interface Props {

}

export const PlayerShootComponent = (props: Props) => {
    return (
        <img src={image} width="48" height="48" alt="this is the player's shoot" />
    );
} 