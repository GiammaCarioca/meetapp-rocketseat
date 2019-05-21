import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import foto from '../../assets/images/meetup.jpg';

import { Card } from './styles';

function createCard({ meetups }) {
  return (
    <Link
      to="/meetup"
      style={{
			  textDecoration: 'none',
			  display: 'flex',
			  justifyContent: 'space-between',
      }}
    >
      {meetups.map(meetup => (
        <Card key={meetup.id}>
          <img src={foto} alt="meetup" />
          <div className="wrapper-content">
            <div className="card-text">
              <h2>{meetup.title}</h2>
              <small>{meetup.members} membros</small>
            </div>
            <div className="wrapper-icon">
              <i className="material-icons">keyboard_arrow_right</i>
            </div>
          </div>
        </Card>
      ))}
    </Link>
  );
}

const mapStatetoProps = state => ({
  meetups: state.meetups,
});

export default connect(mapStatetoProps)(createCard);
