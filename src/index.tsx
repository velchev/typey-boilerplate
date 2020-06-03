import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';

import { history, store } from '^/store';
import Main from '^/components/main';
import Hello from '^/components/hello';
import Ping from '^/components/ping';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main>
        <Switch>
          <Route path="/ping" render={() => <Ping />} />

          <Route path="/" render={() => <Hello />} />
        </Switch>
      </Main>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
