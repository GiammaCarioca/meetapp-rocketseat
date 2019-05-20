import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import Routes from './routes';
import GlobalSyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <GlobalSyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
