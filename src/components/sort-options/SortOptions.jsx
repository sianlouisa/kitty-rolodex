import * as React from 'react';
import './sort-options.css';

export const SortOptions = ({ handleSort, isSortedAscending }) => {
  return (
    <div className="sort-options">
      <button onClick={handleSort}>
        {isSortedAscending ? 'Sort Ascending' : 'Sort Descending'}
      </button>
    </div>
  );
};
