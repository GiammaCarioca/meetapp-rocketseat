import React, { Component } from 'react';
import './Fieldset.css';

export default class Preferences extends Component {
	render() {
		return (
			<div>
				<fieldset>
					<legend className="form-label">Preferências</legend>
					<div className="checkbox">
						<input
							onChange={this.handleChange}
							type="checkbox"
							id="frontend"
							name="frontend"
							value="frontend"
						/>
						<label htmlFor="frontend">Front-end</label>
					</div>
					<div className="checkbox">
						<input
							onChange={this.handleChange}
							type="checkbox"
							id="backend"
							name="backend"
							value="backend"
						/>
						<label htmlFor="backend">Back-end</label>
					</div>
					<div className="checkbox">
						<input onChange={this.handleChange} type="checkbox" id="mobile" name="mobile" value="mobile" />
						<label htmlFor="mobile">Mobile</label>
					</div>
					<div className="checkbox">
						<input onChange={this.handleChange} type="checkbox" id="devops" name="devops" value="devops" />
						<label htmlFor="devops">DevOps</label>
					</div>
					<div className="checkbox">
						<input onChange={this.handleChange} type="checkbox" id="gestao" name="gestao" value="gestao" />
						<label htmlFor="gestao">Gestão</label>
					</div>
					<div className="checkbox">
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
			</div>
		);
	}
}
