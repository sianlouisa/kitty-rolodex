import * as React from 'react';
import './card-list.css';
import { Card } from '../card/card';

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  );
};
