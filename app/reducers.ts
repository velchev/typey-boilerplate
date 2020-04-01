import {
  APP_LOADING,
  APP_LOADING_FAILED,
  APP_LOADING_SUCCEED,
} from '^/actions';
import { Action, AppState } from '^/types';

export const initialState: AppState = {
  loading: false,
  failed: false,
};

export const appReducer = (
  state: AppState = initialState,
  actions: Action<AppState>,
) => {
  switch (actions.type) {
    case APP_LOADING:
      return {
        ...state,
        loading: true,
      };

    case APP_LOADING_SUCCEED:
      return {
        ...state,
        loading: false,
      };

    case APP_LOADING_FAILED:
      return {
        ...state,
        loading: false,
        failed: true,
      };

    default:
      return state;
  }
};
