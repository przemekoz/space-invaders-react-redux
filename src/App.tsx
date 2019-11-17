import React from 'react';
import './App.css';
import { PlateComponent } from './mods/plate/components/plate';
import { PlateClass } from './mods/plate/classes';

const App: React.FC = () => {
    return (
        <div className="App">
            <PlateComponent plate={new PlateClass()} />
        </div>
    );
}

export default App;
