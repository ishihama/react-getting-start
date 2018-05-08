import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore, combineReducers, applyMiddleware } from 'redux';
//import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
//import * as reducers from './reducers';
import createStore from './createStore';

const history = createBrowserHistory();

const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
