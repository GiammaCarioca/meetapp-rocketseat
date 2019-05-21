const INITIAL_STATE = [
  {
    id: 1,
    title: 'Meetup React Native',
    description:
			'O meetup de React Native é um espaço para discutir sobre tecnologias por volta do desenvolvimento web utilizando a biblioteca do Facebook para criação de interfaces móveis multiplataforma com Javascript.',
    image: 'placeholder',
    members: 87,
    location: 'Rua Guilherme Gembala, 260, Rio do Sul - SC',
    themes: ['Mobile'],
  },
  {
    id: 2,
    title: 'Meetup ReactJS',
    description:
			'O meetup de React Native é um espaço para discutir sobre tecnologias por volta do desenvolvimento web utilizando a biblioteca do Facebook para criação de interfaces móveis multiplataforma com Javascript.',
    image: 'placeholder',
    members: 52,
    location: 'Rua Guilherme Gembala, 260, Rio do Sul - SC',
    themes: ['Front-end'],
  },
  {
    id: 3,
    title: 'Meetup Rocketseat',
    description:
			'O meetup de React Native é um espaço para discutir sobre tecnologias por volta do desenvolvimento web utilizando a biblioteca do Facebook para criação de interfaces móveis multiplataforma com Javascript.',
    image: 'placeholder',
    members: 23,
    location: 'Rua Guilherme Gembala, 260, Rio do Sul - SC',
    themes: ['Marketing', 'Gestão'],
  },
];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
