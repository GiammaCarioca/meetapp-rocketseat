import React from 'react';

import { Container } from './styles';

const Fieldset = ({
  legend, handleCheckbox, frontend, backend, mobile, devops, gestao, marketing,
}) => (
  <Container>
    <legend>{legend}</legend>
    <div className="checkbox-wrapper">
      <input checked={frontend} onChange={handleCheckbox} type="checkbox" id="frontend" name="frontend" />
      <label htmlFor="frontend">Front-end</label>
    </div>
    <div className="checkbox-wrapper">
      <input checked={backend} onChange={handleCheckbox} type="checkbox" id="backend" name="backend" />
      <label htmlFor="backend">Back-end</label>
    </div>
    <div className="checkbox-wrapper">
      <input checked={mobile} onChange={handleCheckbox} type="checkbox" id="mobile" name="mobile" />
      <label htmlFor="mobile">Mobile</label>
    </div>
    <div className="checkbox-wrapper">
      <input checked={devops} onChange={handleCheckbox} type="checkbox" id="devops" name="devops" />
      <label htmlFor="devops">DevOps</label>
    </div>
    <div className="checkbox-wrapper">
      <input checked={gestao} onChange={handleCheckbox} type="checkbox" id="gestao" name="gestao" />
      <label htmlFor="gestao">Gestão</label>
    </div>
    <div className="checkbox-wrapper">
      <input checked={marketing} onChange={handleCheckbox} type="checkbox" id="marketing" name="marketing" />
      <label htmlFor="marketing">Marketing</label>
    </div>
  </Container>
);

export default Fieldset;
