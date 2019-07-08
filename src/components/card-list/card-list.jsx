import * as React from 'react';
import './card-list.css';
import { Card } from '../card/card';

export const CardList = ({ monsters }) => {
  if (monsters.length <= 0) {
    return <h1 style={{ color: '#ff8fa0' }}>No users found :(</h1>;
  }

  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  );
};
