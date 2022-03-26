import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Routes, Route } from 'react-router-dom';

import { history, store } from '^/store';
import Main from '^/components/main';
import Hello from '^/components/hello';
import Ping from '^/components/ping';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main>
        <Routes>
          <Route path="/ping">
            <Ping />
          </Route>

          <Route path="/">
            <Hello />
          </Route>
        </Routes>
      </Main>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
