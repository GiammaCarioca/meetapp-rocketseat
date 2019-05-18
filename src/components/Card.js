import React, { Component } from 'react';
import './Card.css';
import foto from '../assets/images/meetup.jpg';

export default class Card extends Component {
	render() {
		return (
			<div className="card">
				<img className="foto-card" src={foto} alt="meetup" />
				<div className="card-text">
					<div>
						<h2>Meetup React Native</h2>
						<span>120 membros</span>
					</div>
					<a href="#">
						<i className="material-icons arrow">keyboard_arrow_right</i>
					</a>
				</div>
			</div>
		);
	}
}
