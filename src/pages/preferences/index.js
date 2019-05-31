import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
import * as PreferencesActions from '../../store/actions/preferences';
import logo from '../../assets/images/logo-red.svg';
import Button from '../../components/Button';
import {
  Container, Logo, Wrapper, Fieldset,
} from './styles';

class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedUser: '',
      preferences: {
        frontend: false,
        backend: false,
        mobile: false,
        devops: false,
        gestao: false,
        marketing: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { data } = await api.get('/preferences');
	  const { userName } = data;
    await this.setState({ loggedUser: userName });
  }

	handleInputChange(e) {
	  this.setState({
	    [e.target.name]: e.target.checked,
	  });
	}

	handleSubmit(e) {
	  e.preventDefault();

	  try {
	    const {
	      frontend, backend, mobile, devops, gestao, marketing,
	    } = this.state.preferences;

	    const preferences = {
	      frontend,
	      backend,
	      mobile,
	      devops,
	      gestao,
	      marketing,
	    };

	    this.props.addPreferencesRequest(preferences);
	  } catch (err) {
	    console.log(err);
	  } finally {
	    this.props.history.push('/dashboard');
	  }
	}

	render() {
	  const {
	    frontend, backend, mobile, devops, gestao, marketing,
	  } = this.state;
	  return (
  <Container>
    <Logo>
      <img className="logo-red" src={logo} alt="MeetApp" />
    </Logo>
    <Wrapper>
      <span>Olá, {this.state.loggedUser}</span>
      <p>
						Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
						selecionarmos os melhores meetups pra você:
      </p>
      <form action="/preferences" method="post" onSubmit={this.handleSubmit}>
        <Fieldset>
          <legend>Preferências</legend>
          <div className="checkbox-wrapper">
            <input
              checked={frontend}
              onChange={this.handleInputChange}
              type="checkbox"
              id="frontend"
              name="frontend"
            />
            <label htmlFor="frontend">Front-end</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              checked={backend}
              onChange={this.handleInputChange}
              type="checkbox"
              id="backend"
              name="backend"
            />
            <label htmlFor="backend">Back-end</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              checked={mobile}
              onChange={this.handleInputChange}
              type="checkbox"
              id="mobile"
              name="mobile"
            />
            <label htmlFor="mobile">Mobile</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              checked={devops}
              onChange={this.handleInputChange}
              type="checkbox"
              id="devops"
              name="devops"
            />
            <label htmlFor="devops">DevOps</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              checked={gestao}
              onChange={this.handleInputChange}
              type="checkbox"
              id="gestao"
              name="gestao"
            />
            <label htmlFor="gestao">Gestão</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              checked={marketing}
              onChange={this.handleInputChange}
              type="checkbox"
              id="marketing"
              name="marketing"
            />
            <label htmlFor="marketing">Marketing</label>
          </div>
        </Fieldset>
        <Button type="submit">Continuar</Button>
      </form>
    </Wrapper>
  </Container>
	  );
	}
}

const mapDispatchToProps = dispatch => bindActionCreators(PreferencesActions, dispatch);

export default connect(null, mapDispatchToProps)(Preferences);
