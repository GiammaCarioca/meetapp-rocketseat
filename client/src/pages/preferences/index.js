import React, { Component } from 'react';
import logo from '../../assets/images/logo-red.svg';
import Fieldset from '../../components/Fieldset';
import Button from '../../components/Button';
import { Container, Logo, Wrapper } from './styles';

export default class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = {response: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this);
    this.props.history.push("/");
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.name }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/preferences');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Container>
        <Logo>
          <img className="logo-red" src={logo} alt="MeetApp" />
        </Logo>
        <Wrapper>
          <span>Olá, {this.state.response}</span>
          <p>
						Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
						selecionarmos os melhores meetups pra você:
          </p>
          <form onSubmit={this.handleSubmit}>
            <Fieldset legend="Preferências" />
            <Button type="submit">Continuar</Button>
          </form>
        </Wrapper>
      </Container>
    );
  }
}
