import React from 'react';
import characters from '../data/characters';
import "./CharacterSelect.css";

export default function CharacterSelect() {
  return (
    <div className="character-select">
      <p>Character Select</p>
      {characters.map(c =>
        <div>
          <div>{c.name}</div>
          <div>{c.role}</div>
        </div>
      )}

    </div>
  )
}
