import React from 'react';
import Nood from './Nood';

export default function NoodsBoiler() {
  const rand = Math.floor(Math.rand() * 5);

  const randColor = (rand) => ({
    "0": "green",
    "1": "red",
    "2": "yellow",
    "3": "white",
    "4": "blue",
  })[rand];

  return (
    <div>
      <Noods color={randColor(rand)}/>
    </div>
  )
}
