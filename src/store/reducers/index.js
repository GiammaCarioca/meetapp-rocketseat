import { combineReducers } from 'redux';

import users from './users';
import preferences from './preferences';
import meetups from './meetups';

export default combineReducers({ users, preferences, meetups });
