import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UsersActions from '../../store/actions/users';
import logo from '../../assets/images/logo-red.svg';
import Button from '../../components/Button';

import {
  Container, Logo, Form, StyledLink,
} from './styles';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
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

    try {
      const { name, email, password } = this.state;
      const user = {
        name,
        email,
        password,
      };

      this.props.addUserRequest(user);
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({
        name: '',
        email: '',
        password: '',
      });
      this.props.history.push('/preferences');
    }
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <Container>
        <Logo>
          <img className="logo-red" src={logo} alt="MeetApp" />
        </Logo>
        <Form action="/signup" method="post" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            placeholder="Digite seu nome"
          />
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
          <Button type="submit">Criar conta</Button>
          <StyledLink to="/">Já tenho conta</StyledLink>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(null, mapDispatchToProps)(SignUp);
