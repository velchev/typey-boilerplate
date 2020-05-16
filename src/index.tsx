import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';

import { history, store } from '^/store';
import Main from '^/components/main';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main>
        <Switch>
          <Route path="/example" render={() => <h2>Example</h2>} />

          <Route
            path="/"
            render={() => <h2>Hello from Typescript and React!</h2>}
          />
        </Switch>
      </Main>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
