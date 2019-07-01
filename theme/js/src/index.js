import App from './components/App';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Router, browserHistory, Route } from 'react-router';
import thunk from 'redux-thunk';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import urlSyncMiddleware from './middlewares/urlSync';
import content from './reducers/content';
import {routerReducer} from 'react-router-redux';
import {createLogger} from 'redux-logger';

const devLogger = createLogger({
  collapsed: true
});

const middleware = [routerMiddleware(browserHistory), urlSyncMiddleware, devLogger, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    routing: routerReducer,
    content: content
  }), 
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


