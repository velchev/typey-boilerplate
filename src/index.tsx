import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { store } from '^/store';
import Main from '^/components/main';
import Hello from '^/components/hello';
import Ping from '^/components/ping';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/ping" element={<Ping />} />

          <Route path="/" element={<Hello />} />
        </Routes>
      </Main>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
