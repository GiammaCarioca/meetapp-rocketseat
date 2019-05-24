import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MeetupsActions from '../../store/actions/meetups';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';

import { Main, Section, Container } from './styles';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getMeetupsRequest();
  }

  render() {
    const meetups = this.props.meetups.map(meetup => (
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

const mapDispatchToProps = dispatch => bindActionCreators(MeetupsActions, dispatch);

export default connect(mapStatetoProps, mapDispatchToProps)(Dashboard);
