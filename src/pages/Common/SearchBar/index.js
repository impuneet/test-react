/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchBar = props => {
  return (
    <Input
      type="text"
      icon="search"
      placeholder="Search by name..."
      onKeyDown={e => {
        if (e.keyCode === 13) {
          e.preventDefault();
        }
      }}
      onSubmit={e => {
        e.preventDefault();
      }}
      onChange={props.handleChange}
    />
  );
};

export default SearchBar;
