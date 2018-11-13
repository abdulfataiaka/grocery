import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import createStore from './store';

const store = createStore({});

const appDomNode = document.getElementById('react-app');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appDomNode
);
