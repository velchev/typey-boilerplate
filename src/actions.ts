export const typePayloadAction = (type: string) => (
  payload: unknown,
): Record<string, unknown> => ({
  type,
  payload,
});

export const APP_LOADING = 'APP_LOADING';
export const appLoading = typePayloadAction(APP_LOADING);

export const APP_LOADING_STARTED = 'APP_LOADING_STARTED';
export const appLoadingStarted = typePayloadAction(APP_LOADING_STARTED);

export const APP_LOADING_FAILED = 'APP_LOADING_FAILED';
export const appLoadingFailed = typePayloadAction(APP_LOADING_FAILED);

export const APP_LOADING_SUCCEED = 'APP_LOADING_SUCCEED';
export const appLoadingSucceed = typePayloadAction(APP_LOADING_SUCCEED);
