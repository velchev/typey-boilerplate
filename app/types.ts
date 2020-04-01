import { RouterState } from 'connected-react-router';

export interface Action<T = {}> {
  type: string;
  payload?: T;
}

export interface AppState {
  loading: boolean;
  failed: boolean;
}

export interface StoreState {
  router: RouterState;
  app: AppState;
}
