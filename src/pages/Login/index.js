import React, { Component } from 'react';
import logo from '../../assets/images/logo-red.svg';
import Button from '../../components/Button';

import { Container, Logo, Form } from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      email: '',
      password: '',
    });
  }

  render() {
    const { email, password, handleInputChange } = this.state;
    return (
      <Container>
        <Logo>
          <img className="logo-red" src={logo} alt="MeetApp" />
        </Logo>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="Digite seu e-mail"
          />

          <label htmlFor="password">Senha</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Sua senha secreta"
          />
          <Button type="submit">Entrar</Button>
          <Button secondary type="submit">
						Criar conta grátis
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
