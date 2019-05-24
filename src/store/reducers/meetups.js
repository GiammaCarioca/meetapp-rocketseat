const INITIAL_STATE = [];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_MEETUPS_SUCCESS': {
      return [...state, ...action.payload.data];
    }
    case 'ADD_MEETUP': {
      return [
        ...state,
        // {
        //   id: 7,
        //   title: 'Meetup IED',
        //   description:
        // 		'O meetup de React Native é um espaço para discutir sobre tecnologias por volta do desenvolvimento web utilizando a biblioteca do Facebook para criação de interfaces móveis multiplataforma com Javascript.',
        //   image: 'https://www.tigera.io/wp-content/uploads/2018/08/IMG_20180822_183236-598x381.jpg',
        //   members: 1,
        //   location: 'Rua Guilherme Gembala, 260, Rio do Sul - SC',
        //   themes: ['Front-end'],
        //   createdBy: 'Giamma',
        //   createdAt: '10/09/2019',
        //   dueDate: '13/09/2019',
        //   userId: [7],
        // },
      ];
    }
    default:
      return state;
  }
}
