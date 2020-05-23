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

import { StoreState } from '^/types';
import { appReducer } from '^/reducers';

export const history = createBrowserHistory();

const middlewares: Array<Middleware<unknown, StoreState>> = [
  routerMiddleware(history),
];

const reducers = combineReducers<StoreState>({
  router: connectRouter(history),
  app: appReducer,
});

export const store = createStore<StoreState, AnyAction, unknown, unknown>(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
