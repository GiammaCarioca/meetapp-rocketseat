export const addUserRequest = user => ({ type: 'ADD_USER_REQUEST', payload: { user } });

export const addUserSuccess = data => ({ type: 'ADD_USER_SUCCESS', payload: { data } });

export const addLoginRequest = user => ({ type: 'ADD_LOGIN_REQUEST', payload: { user } });

export const addLoginSuccess = data => ({ type: 'ADD_LOGIN_SUCCESS', payload: { data } });
