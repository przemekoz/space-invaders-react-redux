import React from 'react';
import './App.css';
import { GameComponent } from './mods/game/components/game';
import { GameClass } from './mods/game/classes';
import { GAME_LEVELS } from './mods/game/config/levels';

const App: React.FC = () => {
    return (
        <div className="App">
            <GameComponent game={new GameClass( {
                levels: GAME_LEVELS
            } )} />
        </div>
    );
}

export default App;
