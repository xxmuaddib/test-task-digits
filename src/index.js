import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'animate.css';
import './index.css';
import { App } from './App';
import { store } from './redux/store';

const root = ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
