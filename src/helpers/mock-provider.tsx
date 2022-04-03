import React from 'react';
import { Provider, ProviderProps } from 'react-redux';

const MockProvider = ({ children, store }: ProviderProps) => (
  <Provider store={store}>{children}</Provider>
);

export default MockProvider;
