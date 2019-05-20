import React from 'react';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';

import { Main } from './styles';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Main>
        <SearchBar />
        <section className="wrapper-section">
          <h3>Inscrições</h3>
          <div className="group-cards">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section className="wrapper-section">
          <h3>Próximos meetups</h3>
          <div className="group-cards">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section className="wrapper-section">
          <h3>Recomendados</h3>
          <div className="group-cards">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </Main>
    </div>
  );
}
