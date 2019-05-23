import React, { Component } from 'react';

import { Container } from './styles';

class Fieldset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frontend: false,
      backend: false,
      mobile: false,
      devops: false,
      gestao: false,
      marketing: false,
    };
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

	handleCheckbox = (e) => {
	  this.setState({ [e.target.name]: e.target.checked });
	};

	render() {
	  const {
	    frontend, backend, mobile, devops, gestao, marketing,
	  } = this.state;
	  const { legend } = this.props;
	  return (
  <Container>
    <legend>{legend}</legend>
    <div className="checkbox-wrapper">
      <input
        checked={frontend}
        onChange={this.handleCheckbox}
        type="checkbox"
        id="frontend"
        name="frontend"
      />
      <label htmlFor="frontend">Front-end</label>
    </div>
    <div className="checkbox-wrapper">
      <input
        checked={backend}
        onChange={this.handleCheckbox}
        type="checkbox"
        id="backend"
        name="backend"
      />
      <label htmlFor="backend">Back-end</label>
    </div>
    <div className="checkbox-wrapper">
      <input checked={mobile} onChange={this.handleCheckbox} type="checkbox" id="mobile" name="mobile" />
      <label htmlFor="mobile">Mobile</label>
    </div>
    <div className="checkbox-wrapper">
      <input checked={devops} onChange={this.handleCheckbox} type="checkbox" id="devops" name="devops" />
      <label htmlFor="devops">DevOps</label>
    </div>
    <div className="checkbox-wrapper">
      <input checked={gestao} onChange={this.handleCheckbox} type="checkbox" id="gestao" name="gestao" />
      <label htmlFor="gestao">Gestão</label>
    </div>
    <div className="checkbox-wrapper">
      <input
        checked={marketing}
        onChange={this.handleCheckbox}
        type="checkbox"
        id="marketing"
        name="marketing"
      />
      <label htmlFor="marketing">Marketing</label>
    </div>
  </Container>
	  );
	}
}

export default Fieldset;
