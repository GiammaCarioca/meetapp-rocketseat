export const getMeetups = () => ({ type: 'GET_MEETUPS' });

export const addMeetup = userId => ({ type: 'ADD_MEETUP', payload: { userId } });

export const subscribeMeetup = meetupId => ({ type: 'SUBSCRIBE_MEETUP', payload: { meetupId } });
