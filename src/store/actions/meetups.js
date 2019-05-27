export const getMeetupsRequest = () => ({ type: 'GET_MEETUPS_REQUEST' });

export const getMeetupsSuccess = data => ({ type: 'GET_MEETUPS_SUCCESS', payload: { data } });

export const addMeetup = () => ({ type: 'ADD_MEETUP' });

export const subscribeMeetup = () => ({ type: 'SUBSCRIBE_MEETUP' });
