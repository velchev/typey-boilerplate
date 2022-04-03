import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { StoreState } from '^/types';
import { appReducer } from '^/reducers';

export const middlewares: Array<Middleware<unknown, StoreState>> = [thunk];

export const reducers = combineReducers<StoreState>({
  app: appReducer,
});

export const store = createStore<StoreState, AnyAction, unknown, unknown>(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
