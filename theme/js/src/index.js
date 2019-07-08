import App from './components/App';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Router, browserHistory, Route } from 'react-router';
import thunk from 'redux-thunk';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import urlSyncMiddleware from './middlewares/urlSync';
import rootReducer from './reducers';
import {createLogger} from 'redux-logger';

const devLogger = createLogger({
  collapsed: true
});

const middleware = [routerMiddleware(browserHistory), urlSyncMiddleware, devLogger, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
  applyMiddleware(...middleware)
));

//window.getStore = () => {return store.getState()};
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);


