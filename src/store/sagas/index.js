import { all, takeLatest } from 'redux-saga/effects';

import { addUsers, loginUser } from './users';
import { addPreferences } from './preferences';
import { getMeetups } from './meetups';

export default function* rootSaga() {
  yield all([
    takeLatest('ADD_USER_REQUEST', addUsers),
    takeLatest('ADD_LOGIN_REQUEST', loginUser),
    takeLatest('ADD_PREFERENCES_REQUEST', addPreferences),
    takeLatest('GET_MEETUPS_REQUEST', getMeetups),
  ]);
}
