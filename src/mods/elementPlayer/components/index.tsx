import React from 'react';
import { ElementPlayerInterface } from '../types';
import { ElementPlayerRegularClass } from '../../elementPlayerRegular/classes';
import { PlayerRegularComponent } from '../../elementPlayerRegular/components';

export interface Props {
    element: ElementPlayerInterface;
}

export const PlayerComponent = (props: Props) => {
    const { element } = props;

    const renderType = () => {
        switch (true) {
            case element instanceof ElementPlayerRegularClass:
                return <PlayerRegularComponent />;

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