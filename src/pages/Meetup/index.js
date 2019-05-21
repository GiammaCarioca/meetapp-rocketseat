import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import foto from '../../assets/images/meetup-2.png';

import { Container } from './styles';

const Meetup = ({ meetups }) => (
  <div>
    <Navbar />
    <Container>
      {meetups.filter(meetup => meetup.id === 3).map(meetup => (
        <Fragment>
          <img src={foto} alt={meetup.title} />
          <article>
            <h3>{meetup.title}</h3>
            <small>{meetup.members} membros</small>
            <p className="description">{meetup.description}</p>
            <div className="details">
              <small>Realizado em:</small>
              <address>{meetup.location}</address>
            </div>
          </article>
        </Fragment>
      ))}

      <Button>Inscreva-se</Button>
    </Container>
  </div>
);

const mapStatetoProps = state => ({
  meetups: state.meetups,
});

export default connect(mapStatetoProps)(Meetup);
