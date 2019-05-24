// import api from '../../services/api';

// api.get('/meetups').then((response) => {
//   const meetups = response.data.slice(0, 6);
//   const updatedMembers = meetups.map(meetup => ({
//     ...meetup,
//     members: meetup.userId.length,
//   }));
//   console.log(updatedMembers);
//   return updatedMembers;
// });

// import { call, put } from 'redux-saga/effects';
// import { Creators as MeetupsActions } from 'ducks/meetups';
// import api from '../../services/api';

// export function* getMeetups() {
//   try {
//     const response = yield call(api.get, '/meetups');

//     yield put(MeetupsActions.getMeetupsSuccess(response.data));
//   } catch (err) {
//     console.log(err);
//   }
// }
