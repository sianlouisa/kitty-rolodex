import * as React from 'react';
import './card.css';

export const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        className="card-img"
        src={`https://robohash.org/${monster.id}?set=set4`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};
