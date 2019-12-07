import { RouterState } from 'connected-react-router';

export interface AppState {
  loading: boolean;
  failed: boolean;
}

export interface StoreState {
  router: RouterState;
  app: AppState;
}
