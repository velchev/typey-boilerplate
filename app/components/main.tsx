import React from 'react';

export interface Props {
  children: React.ReactNode;
}

const Header: React.FunctionComponent<{}> = () => <header>Header</header>;
const Footer: React.FunctionComponent<{}> = () => <footer>Footer</footer>;

const Main: React.FunctionComponent<Props> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default React.memo(Main);
