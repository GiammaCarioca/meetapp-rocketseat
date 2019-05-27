import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import SignUp from '../pages/signUp';
import Login from '../pages/login';
import Preferences from '../pages/preferences';
import Meetup from '../pages/meetup';
import NewMeetup from '../pages/newMeetup';
import Profile from '../pages/profile';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/preferences" component={Preferences} />
      <Route exact path="/meetup/:id" component={Meetup} />
      <Route exact path="/newmeetup" component={NewMeetup} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  );
}
