import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
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
							<NavLink to="/">Início</NavLink>
							<NavLink to="/">Buscar</NavLink>
							<NavLink to="/">Novo meetup</NavLink>
						</div>
						<div>
							<NavLink to="/profile">
								<i className="material-icons">person_outline</i>
							</NavLink>
						</div>
					</nav>
				</Fragment>
			</div>
		);
	}
}

export default Navbar;
