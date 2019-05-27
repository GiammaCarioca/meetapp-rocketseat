import React from 'react';

import { Wrapper, StyledLink, Info } from './styles';

const Card = ({
  id, title, thumbnail, members, clicked,
}) => (
  <Wrapper onClick={clicked}>
    <StyledLink to={`/meetup/${id}`}>
      <img src={thumbnail} alt={title} />
      <Info>
        <div>
          <h2>{title}</h2>
          <small>{members} membros</small>
        </div>
        <i className="material-icons">keyboard_arrow_right</i>
      </Info>
    </StyledLink>
  </Wrapper>
);

export default Card;
