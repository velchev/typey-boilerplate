import React from 'react';

import Main from '^/components/main';
import Hello from '^/components/hello';

import '^/index.scss';
import LogoPath from '^images/react-logo.png';

const App: React.FunctionComponent = () => (
  <Main>
    <Hello compiler="TypeScript" framework="React" />
    <img width={50} src={LogoPath} />
  </Main>
);

export default React.memo(App);
