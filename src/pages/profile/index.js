import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../services/auth';
import Navbar from '../../components/Navbar';
import Fieldset from '../../components/Fieldset';
import Button from '../../components/Button';

import { Container, Form } from './styles';

class Profile extends Component {
	state = {
	  name: 'Thiago Giammattey',
	  password: 'Sua senha secreta',
	};

	render() {
	  const { name, password } = this.state;
	  return (
  <Fragment>
    <Navbar />
    <Container>
      <Form action="">
        <label htmlFor="name">Nome</label>
        <input className="input-active" type="text" id="name" name="name" value={name} />
        <label htmlFor="password">Senha</label>
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          placeholder="Sua senha secreta"
        />
        <label htmlFor="password">Confirmação de senha</label>
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          placeholder="Sua senha secreta"
        />
        <Fieldset legend="Preferências" />
        <Button>Salvar</Button>
        <Button onClick={() => logout()}>Logout</Button>
      </Form>
    </Container>
  </Fragment>
	  );
	}
}

const mapStatetoProps = state => ({
  users: state.users,
});

export default connect(mapStatetoProps)(Profile);
