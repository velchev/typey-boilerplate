import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { history, store } from '^/store';
import Main from '^/components/main';
import Hello from '^/components/hello';
import Ping from '^/components/ping';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/ping" element={<Ping />} />

            <Route path="/" element={<Hello />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
