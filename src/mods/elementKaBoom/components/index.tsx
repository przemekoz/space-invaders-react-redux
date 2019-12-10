import React from 'react';
import image0 from '../images/kaBoomPhase0.png';
import image1 from '../images/kaBoomPhase1.png';
import image2 from '../images/kaBoomPhase2.png';
import image3 from '../images/kaBoomPhase3.png';
import image4 from '../images/kaBoomPhase4.png';
import { ElementKaBoomInterface } from '../types';

interface Props {
    element: ElementKaBoomInterface
}

const images = new Map<number, any>();
images.set(0, image0);
images.set(1, image1);
images.set(2, image2);
images.set(3, image3);
images.set(4, image4);

export const KaBoomComponent = (props: Props) => {
    return (
        <img src={images.get(props.element.getPhase())} width="48" height="48" alt="this is the ka-boom" />
    );
} 