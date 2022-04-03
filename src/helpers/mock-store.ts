import { createStore, applyMiddleware } from 'redux';

import { reducers, middlewares } from '^/store';
import { StoreState } from '^/types';

export const mockStore = (initialState: Partial<StoreState>) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore,
  );

  return createStoreWithMiddleware(reducers, initialState);
};
