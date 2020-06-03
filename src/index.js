import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
//browser router is a component from react router dom library
import {Provider} from 'react-redux';
import {persistGate} from 'redux-persist/integration/react';

import './index.css';
import App from './App';

import {store,persistor} from'./redux/store';
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <persistGate persistor={persistor}>
  <App />
  </persistGate>
   
  </BrowserRouter>,
  </Provider>,
  document.getElementById('root')  
);


