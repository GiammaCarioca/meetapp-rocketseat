import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './config/ReactotronConfig';
import store from './store';
import Routes from './routes';
import GlobalSyle from './styles/global';

console.tron.log('Testando Reactotron');

const App = () => (
  <Provider store={store}>
    <GlobalSyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
