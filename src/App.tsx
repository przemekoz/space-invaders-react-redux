import React from 'react';
import './App.css';
import { PlateComponent } from './mods/plate/components/plate';
import { GameClass } from './mods/plate/classes';

const App: React.FC = () => {
    return (
        <div className="App">
            <PlateComponent plate={new GameClass()} />
        </div>
    );
}

export default App;
