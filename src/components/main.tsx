import React from 'react';

import LogoPath from '^images/logo.png';

export interface Props {
  children: React.ReactNode;
}

const Header: React.FunctionComponent = () => (
  <header>
    <img width={50} src={LogoPath} />
  </header>
);

const Footer: React.FunctionComponent = () => <footer></footer>;

const Main: React.FunctionComponent<Props> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default React.memo(Main);
