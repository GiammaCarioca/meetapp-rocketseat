import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import foto from '../../assets/images/meetup-2.png';

import { Article, Wrapper } from './styles';

const Meetup = (props) => {
  const { meetups } = props;
  const { id } = props.match.params;
  return (
    <Fragment>
      <Navbar />
      {meetups.filter(meetup => meetup.id === parseInt(id)).map(meetup => (
        <Article key={meetup.id}>
          <img src={foto} alt={meetup.title} />
          <Wrapper>
            <h3>{meetup.title}</h3>
            <small>{meetup.members} membros</small>
            <p className="description">{meetup.description}</p>
            <div className="details">
              <small>Realizado em:</small>
              <address>{meetup.location}</address>
            </div>
          </Wrapper>
          <Button>Inscreva-se</Button>
        </Article>
      ))}
    </Fragment>
  );
};

const mapStatetoProps = state => ({
  meetups: state.meetups,
});

export default connect(mapStatetoProps)(Meetup);
