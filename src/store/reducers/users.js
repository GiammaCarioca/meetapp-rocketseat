const INITIAL_STATE = [
  {
    id: 1,
    username: 'Giamma',
    email: 'giamma@rocketseat.com',
    preferences: ['Front-end', 'Back-end', 'Mobile'],
  },
  {
    id: 2,
    username: 'Diego',
    email: 'diego@rocketseat.com',
    preferences: ['Front-end', 'Back-end', 'Mobile', 'Gestão', 'DevOps'],
  },
  {
    id: 3,
    username: 'Colt',
    email: 'colt@udemy.com',
    preferences: ['Front-end', 'Back-end'],
  },
];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
