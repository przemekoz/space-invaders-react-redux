import React from 'react';
import player from '../images/player48.png';

interface Props {

}

export const PlayerRegularComponent = (props: Props) => {
    return (
        <img src={player} width="48" height="48" alt="this is the player" />
    );
} 