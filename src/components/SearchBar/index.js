import React from 'react';

import { Container } from './styles';

const SearchBar = () => (
  <Container>
    <form action="">
      <i className="material-icons">search</i>
      <input type="text" id="searchbar" name="searchbar" placeholder="Buscar meetups" />
    </form>
  </Container>
);

export default SearchBar;
