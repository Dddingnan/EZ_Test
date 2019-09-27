// @flow
/* eslint global-require: 0 */

import thunk from 'redux-thunk';
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers/index';

export const History = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const middlewareData = routerMiddleware(History)
const middleware = [thunk, middlewareData];

export const Store = createStore(
  reducers,
  composeEnhancers( applyMiddleware(...middleware) )
);
