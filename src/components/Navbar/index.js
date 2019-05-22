import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

import { Container } from './styles';

const Navbar = () => (
  <Container>
    <div className="nav-links">
      <h1>
        <img src={logo} alt="MeetApp" />
      </h1>
      <NavLink to="/">Início</NavLink>
      <NavLink to="/">Buscar</NavLink>
      <NavLink to="/newmeetup">Novo meetup</NavLink>
    </div>
    <div className="profile">
      <NavLink to="/profile">
        <i className="material-icons">person_outline</i>
      </NavLink>
    </div>
  </Container>
);

export default Navbar;
