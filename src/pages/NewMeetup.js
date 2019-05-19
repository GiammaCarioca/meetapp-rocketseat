import React from 'react';
import Navbar from '../components/Navbar.js';
import Fieldset from '../components/Fieldset';

export default function NewMeetup() {
	return (
		<div>
			<Navbar />
			<div className="signup-container">
				<form>
					<label htmlFor="title">Título</label>
					<input type="text" id="title" name="title" placeholder="Digite o título do meetup" />
					<label htmlFor="description">Descrição</label>
					<input type="text" id="description" name="description" placeholder="Descreva seu meetup" />
					<label htmlFor="image">Imagem</label>
					<input type="text" id="image" name="image" />
					<div className="wrapper-image">
						<i className="material-icons camera">camera_alt</i>
					</div>
					<label htmlFor="location">Localização</label>
					<input type="text" id="location" name="location" placeholder="Onde seu meetup irá acontecer?" />
					<Fieldset legend="Tema do meetup" />
					<button className="button-primary">Salvar</button>
				</form>
			</div>
		</div>
	);
}
