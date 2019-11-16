import React from 'react';

export interface Props {
  compiler: string;
  framework: string;
}

export const Hello: React.FunctionComponent<Props> = ({
  compiler,
  framework,
}) => (
  <h1>
    Hello from {compiler} and {framework}!
  </h1>
);

export default Hello;
