export interface Action<T = unknown> {
  type: string;
  payload?: T;
}

export interface AppState {
  loading: boolean;
  failed: boolean;
}

export interface StoreState {
  app: AppState;
}
