import { StoreState } from '^/types';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { appReducer } from '^/reducers';

export const history = createBrowserHistory();

const middlewares: Array<Middleware<{}, StoreState>> = [
  routerMiddleware(history),
];

const reducers = combineReducers<StoreState>({
  router: connectRouter(history),
  app: appReducer,
});

export const store = createStore<StoreState, AnyAction, {}, {}>(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);