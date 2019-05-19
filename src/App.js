import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalSyle from './styles/global';

function App() {
  return (
    <Fragment>
      <GlobalSyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
