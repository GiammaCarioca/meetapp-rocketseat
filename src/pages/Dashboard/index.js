import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import api from '../../services/api';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';

import { Main, Section, Container } from './styles';

class Dashboard extends Component {
	state = {
	  meetups: [],
	  // selectedCardId: null,
	};

	componentDidMount() {
	  // a fazer: usar actions para tirar o request daqui e colocar no store do redux usando saga
	  api.get('/meetups').then((response) => {
	    // transforming data
	    const meetups = response.data.slice(0, 6);
	    const updatedMembers = meetups.map(meetup => ({
	      ...meetup,
	      members: meetup.userId.length,
	    }));
	    this.setState({ meetups: updatedMembers });
	  });
	}

	// cardSelectedHandler = (id) => {
	//   this.setState({ selectedCardId: id });
	// };

	render() {
	  const meetups = this.state.meetups.map(meetup => (
  <Card
    key={meetup.id}
    id={meetup.id}
    title={meetup.title}
    thumbnail={meetup.image}
    members={meetup.members}
  />
	  ));
	  return (
  <Fragment>
    <Navbar />
    <Main>
      <SearchBar />
      <Section>
        <h3>Inscrições</h3>
        <Container>{meetups}</Container>
      </Section>
      <Section>
        <h3>Próximos meetups</h3>
        <Container>{meetups}</Container>
      </Section>
      <Section>
        <h3>Recomendados</h3>
        <Container>{meetups}</Container>
      </Section>
    </Main>
  </Fragment>
	  );
	}
}

const mapStatetoProps = state => ({
  meetups: state.meetups,
});

export default connect(mapStatetoProps)(Dashboard);
