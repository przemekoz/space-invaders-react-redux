import React from 'react';
import './App.css';
import { GameClass } from './mods/game/classes';
import { GAME_LEVELS } from './mods/game/config/levels';
import { GameComponent } from './mods/game/components';

const App: React.FC = () => {
    return (
        <div className="App">
            <GameComponent game={new GameClass({
                levels: GAME_LEVELS
            })} />
        </div>
    );
}

export default App;
