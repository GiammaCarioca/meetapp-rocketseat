import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { login } from '../../services/auth';

import { addUserSuccess, addLoginSuccess } from '../actions/users';

export function* addUsers(action) {
  try {
    const user = {
      name: action.payload.user.name,
      email: action.payload.user.email,
      password: action.payload.user.password,
    };

    const { data } = yield call(api.post, '/signup', user);

    yield put(addUserSuccess(data));

    // salva o token que recebeu da api no local storage
    login(data.token);
    console.log(data.token);
  } catch (err) {
    console.log(err);
  }
}

export function* loginUser(action) {
  try {
    const user = {
      email: action.payload.user.email,
      password: action.payload.user.password,
    };

    const { data } = yield call(api.post, '/', user);

    yield put(addLoginSuccess(data));

    // salva o token que recebeu da api no local storage
    login(data.token);
    console.log(data.token);
  } catch (err) {
    console.log(err);
  }
}
