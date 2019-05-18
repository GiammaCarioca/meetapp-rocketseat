import React, { Component } from 'react';
import './SignIn.css';
import logo from '../assets/images/logo-red.svg';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleInputChange(e) {
		this.setState({
			[e.target.email]: e.target.value,
			[e.target.password]: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		this.setState({
			email: '',
			password: ''
		});
	}
	render() {
		return (
			<div className="signin-container">
				<form onSubmit={this.handleSubmit}>
					<h1>
						<img src={logo} alt="MeetApp" />
					</h1>
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
					<button className="button-primary">Entrar</button>
					<button className="button-secondary">Criar conta grátis</button>
				</form>
			</div>
		);
	}
}

export default SignIn;
