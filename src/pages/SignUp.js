import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import logo from '../assets/images/logo-red.svg';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Logo = styled.h1`
	img {
		margin: 0;
		width: 35px;
		height: 35px;
	}
`;

const Form = styled.form`
	width: 100%;
	max-width: 300px;
	display: flex;

	label {
		margin-top: 40px;
		font-weight: bold;
		color: #ffffff;
	}

	input {
		flex: 1;
		background: transparent;
		border-style: none;
		margin-top: 10px;
		font-size: 20px;
		color: #ffffff;
		opacity: 0.6;
		text-align: left;

		:focus {
			outline: 5px auto #e5556e;
		}
	}
`;

const Button = styled.button`
	width: 318px;
	height: 50px;
	border-style: none;
	border-radius: 50px;
	background-color: #e5556e;
	margin-top: 30px;
	font-family: Helvetica-Bold;
	font-size: 16px;
	color: #ffffff;
	text-transform: uppercase;
	text-align: center;

	:focus {
		outline: 5px auto #e5556e;
	}

	&:hover {
		background-color: #ffffff;
		color: #e5556e;
	}

	${props => props.secondary
		&& css`
			background-color: transparent;
			opacity: 0.6;
			margin-top: 0;
			font-family: Helvetica;
			text-transform: none;

			&:hover {
				background-color: transparent;
				color: #e5556e;
			}
		`};
`;

export default class SignUp extends Component {
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
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <Container>
        <Logo>
          <img className="logo-red" src={logo} alt="MeetApp" />
        </Logo>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="Digite seu nome"
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            placeholder="Digite seu e-mail"
          />

          <label htmlFor="password">Senha</label>
          <input
            type="text"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="Sua senha secreta"
          />
          <Button>Criar conta</Button>
          <Button secondary type="submit">
						Já tenho conta
          </Button>
        </Form>
      </Container>
    );
  }
}
