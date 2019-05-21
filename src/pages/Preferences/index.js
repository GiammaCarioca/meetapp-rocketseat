import React, { Component } from 'react';
import logo from '../../assets/images/logo-red.svg';
import Fieldset from '../../components/Fieldset';
import Button from '../../components/Button';
import { Container, Logo } from './styles';

class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preferences: {
        frontend: false,
        backend: false,
        mobile: false,
        devops: false,
        gestao: false,
        marketing: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { preferences } = this.state;
    this.setState({ preferences: { ...preferences, [e.target.value]: e.target.checked } });
  }

  render() {
    return (
      <Container>
        <Logo>
          <img className="logo-red" src={logo} alt="MeetApp" />
        </Logo>
        <div className="preferences-content">
          <p className="welcome-user">Olá, Giamma</p>
          <p className="welcome-text">
						Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
						selecionarmos os melhores meetups pra você:
          </p>
          <form action="">
            <Fieldset legend="Preferências" />
          </form>
          <Button type="submit">Continuar</Button>
        </div>
      </Container>
    );
  }
}

export default Preferences;
