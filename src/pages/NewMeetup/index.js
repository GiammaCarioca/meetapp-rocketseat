import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Fieldset from '../../components/Fieldset';
import Button from '../../components/Button';

import { Container, Form } from './styles';

export default class NewMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      description: undefined,
      location: undefined,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.title]: e.target.value,
      [e.target.description]: e.target.value,
      [e.target.location]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      title: '',
      description: '',
      location: '',
    });
  }

  render() {
    const { title, description, location } = this.state;
    return (
      <div>
        <Navbar />
        <Container>
          <div>
            <Form onSubmit={this.handleSubmit}>
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                placeholder="Digite o título do meetup"
                onChange={this.handleInputChange}
              />
              <label htmlFor="description">Descrição</label>
              <input
                type="text"
                id="description"
                name="description"
                value={description}
                placeholder="Descreva seu meetup"
                onChange={this.handleInputChange}
              />
              <label htmlFor="image">Imagem</label>
              <div className="upload-image">
                <input type="text" id="image" name="image" placeholder="Carregue uma imagem" />
              </div>
              <label htmlFor="location">Localização</label>
              <input
                type="text"
                id="location"
                name="location"
                value={location}
                placeholder="Onde seu meetup irá acontecer?"
                onChange={this.handleInputChange}
              />
              <Fieldset legend="Tema do meetup" />
              <Button type="submit">Salvar</Button>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}
