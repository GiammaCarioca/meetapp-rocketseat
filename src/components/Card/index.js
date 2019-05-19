import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import foto from '../../assets/images/meetup.jpg';

import { Card } from './styles';

export default function createCard() {
  return (
    <NavLink to="/meetup">
      <Card>
        <img src={foto} alt="meetup" />
        <div className="card-text">
          <div>
            <h2>Meetup React Native</h2>
            <small>120 membros</small>
          </div>
          <Link to="/meetup">
            <i className="material-icons">keyboard_arrow_right</i>
          </Link>
        </div>
      </Card>
    </NavLink>
  );
}
