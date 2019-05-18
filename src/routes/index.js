import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Preferences from '../pages/Preferences';
import Profile from '../pages/Profile';

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={Dashboard} />
			<Route exact path="/signup" component={SignUp} />
			<Route exact path="/signin" component={SignIn} />
			<Route exact path="/preferences" component={Preferences} />
			<Route exact path="/profile" component={Profile} />
		</Switch>
	);
}
