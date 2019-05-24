import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { getMeetupsSuccess } from '../actions/meetups';

export function* getMeetups() {
  try {
    // recebe response.data, mas com desestruturação ficamos com {data}
    const { data } = yield call(api.get, '/meetups');

    // manipulando data
    const someMeetups = data.slice(0, 6);
    const meetups = someMeetups.map(meetup => ({
      ...meetup,
      members: meetup.userId.length,
    }));

    yield put(getMeetupsSuccess(meetups));
  } catch (err) {
    console.log(err);
  }
}
