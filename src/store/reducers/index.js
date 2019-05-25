import { combineReducers } from 'redux';

import users from './users';
import meetups from './meetups';

export default combineReducers({ users, meetups });
