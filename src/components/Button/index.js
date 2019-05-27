import React from 'react';

import { Container } from './styles';

const Button = ({ secondary, children }) => (
  <Container secondary={secondary} type="submit">
    {children}
  </Container>
);

export default Button;
