import React, { Component } from 'react';
import './Preferences.css';
import Fieldset from '../components/Fieldset';

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
				marketing: false
			}
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ preferences: { ...this.state.preferences, [e.target.value]: e.target.checked } });
	}

	render() {
		return (
			<div className="preferences-container">
				<div className="preferences-content">
					<p className="welcome-user">Olá, Giamma</p>
					<p className="welcome-text">
						Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
						selecionarmos os melhores meetups pra você:
					</p>
					<form action="">
						<Fieldset />
					</form>
					<button className="button-primary">Continuar</button>
				</div>
			</div>
		);
	}
}

export default Preferences;
