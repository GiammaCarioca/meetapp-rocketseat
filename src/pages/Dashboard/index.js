import React from 'react';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';

import { Main } from './styles';

const Dashboard = () => (
  <div>
    <Navbar />
    <Main>
      <SearchBar />
      <section>
        <h3>Inscrições</h3>
        <Card />
      </section>
      <section>
        <h3>Próximos meetups</h3>
        <Card />
      </section>
      <section>
        <h3>Recomendados</h3>
        <Card />
      </section>
    </Main>
  </div>
);

export default Dashboard;
