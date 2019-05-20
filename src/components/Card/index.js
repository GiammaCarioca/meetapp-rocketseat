import React from 'react';
import { NavLink } from 'react-router-dom';
import foto from '../../assets/images/meetup.jpg';

import { Card } from './styles';

export default function createCard() {
  return (
    <NavLink to="/meetup">
      <Card>
        <img src={foto} alt="meetup" />
        <div className="wrapper">
          <div className="card-text">
            <h2>Meetup React Native</h2>
            <small>120 membros</small>
          </div>
          <div className="wrapper-icon">
            <i className="material-icons">keyboard_arrow_right</i>
          </div>
        </div>
      </Card>
    </NavLink>
  );
}
