import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Fieldset from '../components/Fieldset';
import './Profile.css';

class Profile extends Component {
	state = {
		name: 'Thiago Giammattey',
		password: 'Sua senha secreta'
	};
	render() {
		return (
			<div>
				<Navbar />
				<div className="Profile-container">
					<form action="">
						<label htmlFor="name">Nome</label>
						<input className="input-active" type="text" id="name" name="name" value={this.state.name} />
						<label htmlFor="password">Senha</label>
						<input
							type="text"
							id="password"
							name="password"
							value={this.state.password}
							placeholder="Sua senha secreta"
						/>
						<label htmlFor="password">Confirmação de senha</label>
						<input
							type="text"
							id="password"
							name="password"
							value={this.state.password}
							placeholder="Sua senha secreta"
						/>
					</form>
					<Fieldset />
					<button className="button-primary">Salvar</button>
				</div>
			</div>
		);
	}
}

export default Profile;
