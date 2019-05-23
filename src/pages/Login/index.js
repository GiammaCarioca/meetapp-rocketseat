import React, { Component } from 'react';
import logo from '../../assets/images/logo-red.svg';
import Button from '../../components/Button';

import {
  Container, Logo, Form, StyledLink,
} from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
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
    const { email, password } = this.state;
    return (
      <Container>
        <Logo>
          <img className="logo-red" src={logo} alt="MeetApp" />
        </Logo>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="Digite seu e-mail"
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Sua senha secreta"
          />
          <Button type="submit">Entrar</Button>
          <StyledLink to="/signup">Criar conta grátis</StyledLink>
        </Form>
      </Container>
    );
  }
}
