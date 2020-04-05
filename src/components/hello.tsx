import React from 'react';

export interface Props {
  compiler: string;
  framework: string;
}

const Hello: React.FunctionComponent<Props> = ({ compiler, framework }) => (
  <h2>
    Hello from {compiler} and {framework}!
  </h2>
);

export default React.memo(Hello);
