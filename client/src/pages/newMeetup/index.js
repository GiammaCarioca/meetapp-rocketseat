import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MeetupsActions from '../../store/actions/meetups';
import Navbar from '../../components/Navbar';
import Fieldset from '../../components/Fieldset';
import Button from '../../components/Button';

import { Container, Form } from './styles';

class NewMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      location: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    try {
      // this.props.addMeetup();
      // this.setState({
      //   title: '',
      //   description: '',
      //   location: '',
      // });
    } catch (error) {
      console.log(error);
    } finally {
      this.props.history.push('/');
    }
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
              <textarea
                id="description"
                name="description"
                value={description}
                placeholder="Descreva seu meetup"
                onChange={this.handleInputChange}
              />
              <label htmlFor="image">Imagem</label>
              <div className="upload-image">
                <input type="file" id="image" name="image" />
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

const mapStatetoProps = state => ({
  meetups: state.meetups,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupsActions, dispatch);

export default connect(mapStatetoProps, mapDispatchToProps)(NewMeetup);
