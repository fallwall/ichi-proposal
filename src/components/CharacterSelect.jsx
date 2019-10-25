import React, { useState } from 'react';
import characters from '../data/characters';
import "./CharacterSelect.css";

const CharacterSelect = () => {
  const [char, setChar] = useState(null);

  return (
    <div className="character-select">
      <p>Character Select</p>
      {characters.map(c =>
        <div key={c.id}>
          <div>{c.name}</div>
          <div>{c.role}</div>
          <div onClick={() => setChar(c.id)}>SELECT</div>
        </div>
      )}

    </div>
  )
}

export default CharacterSelect;
