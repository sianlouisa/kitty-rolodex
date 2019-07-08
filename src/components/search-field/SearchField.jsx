import * as React from 'react';
import './search-field.css';

export const SearchField = ({
  handleSearchChange,
  placeholder,
  autoFocus,
  className,
}) => {
  return (
    <input
      type="search"
      className={className}
      autoFocus={autoFocus}
      placeholder={placeholder}
      onChange={handleSearchChange}
    />
  );
};
