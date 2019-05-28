import { call, put } from 'redux-saga/effects';
// import uuid from 'uuid/v4';
import api from '../../services/api';

import { addUserSuccess } from '../actions/users';

export function* addUsers(action) {
  try {
    const user = {
      // id: uuid(),
      name: action.payload.user.name,
      email: action.payload.user.email,
      password: action.payload.user.password,
      // preferences: {
      //   frontend: false,
      //   backend: false,
      //   Mobile: false,
      //   Devops: false,
      //   Gestao: false,
      //   Marketing: false,
      // },
    };

    const { data } = yield call(api.post, '/signup', user);

    yield put(addUserSuccess(data));
  } catch (err) {
    console.log(err);
  }
}
