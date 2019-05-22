import React from 'react';
import { connect } from 'react-redux';
import foto from '../../assets/images/meetup.jpg';

import { Container, Wrapper, StyledLink } from './styles';

const Card = ({ meetups }) => (
  <Container>
    {meetups.map(meetup => (
      <Wrapper key={meetup.id}>
        <StyledLink to="/meetup">
          <img src={foto} alt={meetup.title} />
          <div className="wrapper-content">
            <div className="card-text">
              <h2>{meetup.title}</h2>
              <small>{meetup.members} membros</small>
            </div>
            <div className="wrapper-icon">
              <i className="material-icons">keyboard_arrow_right</i>
            </div>
          </div>
        </StyledLink>
      </Wrapper>
    ))}
  </Container>
);

const mapStatetoProps = state => ({
  meetups: state.meetups,
});

export default connect(mapStatetoProps)(Card);
