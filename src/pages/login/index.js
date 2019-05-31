import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UsersActions from '../../store/actions/users';
import logo from '../../assets/images/logo-red.svg';
import Button from '../../components/Button';

import {
  Container, Logo, Form, StyledLink,
} from './styles';

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
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    try {
      const { email, password } = this.state;
      const user = {
        email,
        password,
      };

      this.props.addLoginRequest(user);
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({
        email: '',
        password: '',
      });
      this.props.history.push('/preferences');
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <Logo>
          <img className="logo-red" src={logo} alt="MeetApp" />
        </Logo>
        <Form action="/" method="post" onSubmit={this.handleSubmit}>
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

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(null, mapDispatchToProps)(Login);
