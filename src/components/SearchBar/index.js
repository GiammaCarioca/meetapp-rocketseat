import React from 'react';

import { Search } from './styles';

export default function SearchBar() {
  return (
    <Search>
      <form action="">
        <i className="material-icons">search</i>
        <input type="text" id="searchbar" name="searchbar" placeholder="Buscar meetups" />
      </form>
    </Search>
  );
}
