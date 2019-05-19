import React from 'react';

import { Button } from './styles';

export default function createButton({ secondary, children }) {
  return (
    <Button secondary={secondary} type="submit">
      {children}
    </Button>
  );
}
