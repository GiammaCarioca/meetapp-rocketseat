import { all, takeLatest } from 'redux-saga/effects';

import { getMeetups } from './meetups';

export default function* rootSaga() {
  yield all([takeLatest('GET_MEETUPS_REQUEST', getMeetups)]);
}
