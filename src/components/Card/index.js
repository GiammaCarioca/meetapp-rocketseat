import React from 'react';
import { connect } from 'react-redux';
import foto from '../../assets/images/meetup.jpg';

import {
  Container, Wrapper, StyledLink, Info,
} from './styles';

const Card = ({ meetups }) => (
  <Container>
    {meetups.map(meetup => (
      <Wrapper key={meetup.id}>
        <StyledLink to={`/meetup/${meetup.id}`}>
          <img src={foto} alt={meetup.title} />
          <Info>
            <div>
              <h2>{meetup.title}</h2>
              <small>{meetup.members} membros</small>
            </div>
            <i className="material-icons">keyboard_arrow_right</i>
          </Info>
        </StyledLink>
      </Wrapper>
    ))}
  </Container>
);

const mapStatetoProps = state => ({
  meetups: state.meetups,
});

export default connect(mapStatetoProps)(Card);
