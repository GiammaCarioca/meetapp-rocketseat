import React from 'react';
import Navbar from '../../components/Navbar';
import Fieldset from '../../components/Fieldset';
import Button from '../../components/Button';

import { Container, Form } from './styles';

export default function NewMeetup() {
  return (
    <div>
      <Navbar />
      <Container>
        <div>
          <Form>
            <label htmlFor="title">Título</label>
            <input type="text" id="title" name="title" placeholder="Digite o título do meetup" />
            <label htmlFor="description">Descrição</label>
            <input type="text" id="description" name="description" placeholder="Descreva seu meetup" />
            <label htmlFor="image">Imagem</label>
            <div className="upload-image">
              <input type="text" id="image" name="image" placeholder="Carregue uma imagem" />
            </div>
            <label htmlFor="location">Localização</label>
            <input type="text" id="location" name="location" placeholder="Onde seu meetup irá acontecer?" />
          </Form>
          <Fieldset legend="Tema do meetup" />
          <Button>Salvar</Button>
        </div>
      </Container>
    </div>
  );
}
