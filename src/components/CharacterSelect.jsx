import React, { useContext } from 'react';
import { Context } from '../context/dataContext';
import characters from '../data/characters';
import "./CharacterSelect.css";

const CharacterSelect = () => {

  // const {
  //   selectPlayerRole
  // } = useContext(Context);

  return (
    <div className="character-select">
      <p>Character Select</p>
      {characters.map(c =>
        <div key={c.id}>
          <div>{c.name}</div>
          <div>{c.role}</div>
          {/* <div onClick={() => selectPlayerRole(c.id)}>SELECT</div> */}
        </div>
      )}

    </div>
  )
}

export default CharacterSelect;
