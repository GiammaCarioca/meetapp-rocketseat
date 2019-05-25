import { all, takeLatest } from 'redux-saga/effects';

import { getMeetups } from './meetups';
import { addUsers } from './users';

export default function* rootSaga() {
  yield all([takeLatest('GET_MEETUPS_REQUEST', getMeetups), takeLatest('ADD_USER_REQUEST', addUsers)]);
}
