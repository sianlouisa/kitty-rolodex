import * as React from 'react';
import './search-field.css';

export const SearchField = ({ handleSearchChange }) => {
  return (
    <div className="search-field">
      <input
        type="search"
        autoFocus
        placeholder="Search users..."
        onChange={handleSearchChange}
      />
    </div>
  );
};
