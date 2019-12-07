import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Hello from './components/hello';
import { history, store } from './store';

ReactDOM.render(
  // tslint:disable-next-line: jsx-wrap-multiline
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Hello compiler="TypeScript" framework="React" />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
