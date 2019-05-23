import React, { Component } from 'react';
import logo from '../../assets/images/logo-red.svg';
import Fieldset from '../../components/Fieldset';
import Button from '../../components/Button';
import { Container, Logo, Wrapper } from './styles';

export default class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this);
  }

  render() {
    return (
      <Container>
        <Logo>
          <img className="logo-red" src={logo} alt="MeetApp" />
        </Logo>
        <Wrapper>
          <span>Olá, Giamma</span>
          <p>
						Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
						selecionarmos os melhores meetups pra você:
          </p>
          <form onSubmit={this.handleSubmit}>
            <Fieldset legend="Preferências" />
            <Button type="submit">Continuar</Button>
          </form>
        </Wrapper>
      </Container>
    );
  }
}
