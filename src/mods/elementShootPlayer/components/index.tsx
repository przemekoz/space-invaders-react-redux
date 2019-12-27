import React from 'react';
import { ElementShootPlayerRegularClass } from '../../elementShootPlayerRegular/classes';
import { ShootPlayerRegularComponent } from '../../elementShootPlayerRegular/components';
import { ElementShootPlayerInterface } from '../types';

export interface Props {
    element: ElementShootPlayerInterface;
}

export const ShootPlayerComponent = (props: Props) => {
    const { element } = props;

    const renderType = () => {
        switch (true) {
            case element instanceof ElementShootPlayerRegularClass:
                return <ShootPlayerRegularComponent />;

            default:
                return null;
        }
    };

    return (
        <div>
            {renderType()}
        </div >
    );
};