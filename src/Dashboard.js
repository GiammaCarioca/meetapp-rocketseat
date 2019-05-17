import React, { Component } from 'react';
import Navbar from './Navbar';
import './Dashboard.css';
import Card from './Card';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="Dashboard-section">
					<div className="wrapper-section">
						<h3>Inscrições</h3>
						<div className="group-card">
							<Card />
							<Card />
							<Card />
						</div>
					</div>
					<div className="wrapper-section">
						<h3>Próximos meetups</h3>
						<div className="group-card">
							<Card />
							<Card />
							<Card />
						</div>
					</div>
					<div className="wrapper-section">
						<h3>Recomendados</h3>
						<div className="group-card">
							<Card />
							<Card />
							<Card />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
