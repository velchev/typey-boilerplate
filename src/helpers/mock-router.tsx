import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '^/store';

const MockRouter: React.FunctionComponent = ({ children }) => (
  <ConnectedRouter history={history}>{children}</ConnectedRouter>
);

export default MockRouter;
