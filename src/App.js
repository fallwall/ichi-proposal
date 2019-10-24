import React from 'react';
import Calendar from './components/Calendar';
import CharacterSelect from './components/CharacterSelect';

import './App.css';

function App() {
  return (
    <div className="App">
      <p>It's a game.</p>
      <Calendar />
      <CharacterSelect />
    </div>
  );
}

export default App;
