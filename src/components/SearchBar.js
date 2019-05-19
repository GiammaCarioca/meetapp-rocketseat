import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
	return (
		<div>
			<i className="material-icons">search</i>
			<input className="searchbar" type="text" id="searchbar" name="searchbar" placeholder="Buscar meetups" />
		</div>
	);
}
