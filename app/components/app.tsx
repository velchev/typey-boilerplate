import React from 'react';

import Main from '^/components/main';
import Hello from '^/components/hello';

const App: React.FunctionComponent<{}> = () => (
  <Main>
    <Hello compiler="TypeScript" framework="React" />
  </Main>
);

export default React.memo(App);
