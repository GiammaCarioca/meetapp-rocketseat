import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import SignUp from '../pages/signUp';
import Login from '../pages/login';
import Preferences from '../pages/preferences';
import Meetup from '../pages/meetup';
import NewMeetup from '../pages/newMeetup';
import Profile from '../pages/profile';
import GuestRoute from './GuestRoute';
import PrivateRoute from './PrivateRoute';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <GuestRoute exact path="/signup" component={SignUp} />
      <GuestRoute exact path="/" component={Login} />
      <PrivateRoute exact path="/preferences" component={Preferences} />
      <Route exact path="/meetup/:id" component={Meetup} />
      <PrivateRoute exact path="/newmeetup" component={NewMeetup} />
      <PrivateRoute exact path="/profile" component={Profile} />
    </Switch>
  );
}
