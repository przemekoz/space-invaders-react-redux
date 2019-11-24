import React from 'react';
import image from '../images/kaBoom48.png';

interface Props {

}

export const KaBoomComponent = (props: Props) => {
    return (
        <img src={image} width="48" height="48" alt="this is the ka-boom" />
    );
} 