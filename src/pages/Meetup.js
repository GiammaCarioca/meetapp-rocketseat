import React from 'react';
import Navbar from '../components/Navbar.js';
import foto from '../assets/images/meetup-2.png';

export default function Meetup() {
	return (
		<div>
			<Navbar />
			<img src={foto} alt="react native meetup" />
			<h3>Meetup React Native</h3>
			<p>120 membros</p>
			<p>
				O meetup de React Native é um espaço para discutir sobre tecnologias por volta do desenvolvimento web
				utilizando a biblioteca do Facebook para criação de interfaces móveis multiplataforma com Javascript.
			</p>
			<p>Realizado em:</p>
			<p>Rua Guilherme Gembala, 260, Rio do Sul - SC</p>
			<button className="button-primary">Inscreva-se</button>
		</div>
	);
}
