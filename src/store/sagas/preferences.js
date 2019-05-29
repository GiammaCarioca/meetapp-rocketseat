import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addPreferencesSuccess } from '../actions/preferences';

export function* addPreferences(action) {
  try {
    const preferences = {
      frontend: action.payload.preferences.frontend,
      backend: action.payload.preferences.backend,
      mobile: action.payload.preferences.mobile,
      devops: action.payload.preferences.devops,
      gestao: action.payload.preferences.gestao,
      marketing: action.payload.preferences.marketing,
    };

    const { data } = yield call(api.post, '/preferences', preferences);

    yield put(addPreferencesSuccess(data));
  } catch (err) {
    console.log(err);
  }
}
