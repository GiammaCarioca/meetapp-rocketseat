const INITIAL_STATE = {
  frontend: false,
  backend: false,
  mobile: false,
  devops: false,
  gestao: false,
  marketing: false,
};

export default function preferences(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_PREFERENCES_SUCCESS': {
      return [...state, action.payload.data];
    }
    default:
      return state;
  }
}
