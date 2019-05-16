import React, { Component } from 'react';
import './Preferences.css';

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
			<div className="Preferences-container">
				<div className="Preferences-content">
					<p className="welcome">Olá, Giamma</p>
					<p className="welcome-text">
						Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
						selecionarmos os melhores meetups pra você:
					</p>
					<form action="">
						<fieldset>
							<legend className="form-label">Preferências</legend>
							<div>
								<input
									onChange={this.handleChange}
									type="checkbox"
									id="frontend"
									name="frontend"
									value="frontend"
								/>
								<label htmlFor="frontend">Front-end</label>
							</div>
							<div>
								<input
									onChange={this.handleChange}
									type="checkbox"
									id="backend"
									name="backend"
									value="backend"
								/>
								<label htmlFor="backend">Back-end</label>
							</div>
							<div>
								<input
									onChange={this.handleChange}
									type="checkbox"
									id="mobile"
									name="mobile"
									value="mobile"
								/>
								<label htmlFor="mobile">Mobile</label>
							</div>
							<div>
								<input
									onChange={this.handleChange}
									type="checkbox"
									id="devops"
									name="devops"
									value="devops"
								/>
								<label htmlFor="devops">DevOps</label>
							</div>
							<div>
								<input
									onChange={this.handleChange}
									type="checkbox"
									id="gestao"
									name="gestao"
									value="gestao"
								/>
								<label htmlFor="gestao">Gestão</label>
							</div>
							<div>
								<input
									onChange={this.handleChange}
									type="checkbox"
									id="marketing"
									name="marketing"
									value="marketing"
								/>
								<label htmlFor="marketing">Marketing</label>
							</div>
						</fieldset>
					</form>
					<button className="button-primary">Continuar</button>
				</div>
			</div>
		);
	}
}

export default Preferences;
