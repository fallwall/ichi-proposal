import React from 'react';
import Calendar from './components/Calendar';
import CharacterSelect from './components/CharacterSelect';
import Time from './components/Time';

import './App.css';

function App() {
  return (
    <div className="App">
      <p>It's a game.</p>
      <Calendar />
      <Time />
      <CharacterSelect />
    </div>
  );
}

export default App;
