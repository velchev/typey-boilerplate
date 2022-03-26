import React from 'react';
import { Provider } from 'react-redux';
import { store } from '^/store';

const MockProvider: React.FunctionComponent = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default MockProvider;
