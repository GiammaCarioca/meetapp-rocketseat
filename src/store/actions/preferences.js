export const addPreferencesRequest = preferences => ({ type: 'ADD_PREFERENCES_REQUEST', payload: { preferences } });

export const addPreferencesSuccess = data => ({ type: 'ADD_PREFERENCES_SUCCESS', payload: { data } });
