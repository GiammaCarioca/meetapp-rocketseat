import React from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import foto from '../../assets/images/meetup-2.png';

import { Container } from './styles';

export default function Meetup() {
  return (
    <div>
      <Navbar />
      <Container>
        <img src={foto} alt="react native meetup" />
        <article>
          <h3>Meetup React Native</h3>
          <small>120 membros</small>
          <p className="description">
						O meetup de React Native é um espaço para discutir sobre tecnologias por volta do
						desenvolvimento web utilizando a biblioteca do Facebook para criação de interfaces móveis
						multiplataforma com Javascript.
          </p>
          <div className="details">
            <small>Realizado em:</small>
            <address>Rua Guilherme Gembala, 260, Rio do Sul - SC</address>
          </div>
        </article>
        <Button>Inscreva-se</Button>
      </Container>
    </div>
  );
}
