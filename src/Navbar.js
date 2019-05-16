import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div>
				<Fragment>
					<nav>
						<div className="nav-links">
							<h1>
								<img src={logo} alt="MeetApp" />
							</h1>
							<a href="#">Início</a>
							<a href="#">Buscar</a>
							<a href="#">Novo meetup</a>
						</div>
						<div>
							<a href="#">
								<i className="material-icons">person_outline</i>
							</a>
						</div>
					</nav>
				</Fragment>
			</div>
		);
	}
}

export default Navbar;
