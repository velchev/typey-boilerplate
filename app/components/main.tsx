import React from 'react';

export interface Props {
  children: React.ReactNode;
}

const Header: React.FunctionComponent<{}> = () => <header></header>;
const Footer: React.FunctionComponent<{}> = () => <footer></footer>;

const Main: React.FunctionComponent<Props> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default React.memo(Main);
