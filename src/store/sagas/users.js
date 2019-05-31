import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { login } from '../../services/auth';

import { addUserSuccess } from '../actions/users';

export function* addUsers(action) {
  try {
    const user = {
      name: action.payload.user.name,
      email: action.payload.user.email,
      password: action.payload.user.password,
    };

    const { data } = yield call(api.post, '/signup', user);

    yield put(addUserSuccess(data));

    login(data.token);
    console.log(data.token);
  } catch (err) {
    console.log(err);
  }
}
