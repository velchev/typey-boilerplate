import React from 'react';

export interface Props {
  children: React.ReactChildren;
}

const Main: React.FunctionComponent<Props> = ({ children }) => (
  <>
    Header
    {children}
    Footer
  </>
);

export default React.memo(Main);
