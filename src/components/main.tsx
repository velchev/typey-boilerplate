import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '^/types';

import '^/index.scss';
import LogoPath from '^images/logo.png';

export interface StateProps {
  loading: boolean;
}

export interface Props extends StateProps {
  children: React.ReactNode;
}

const Header: React.FunctionComponent = () => <header>...</header>;
const Footer: React.FunctionComponent = () => <footer>...</footer>;

const Main: React.FunctionComponent<Props> = ({ loading, children }) => (
  <>
    {loading ? (
      <img className="loading-icon" src={LogoPath} />
    ) : (
      <>
        <Header />
        {children}
        <Footer />
      </>
    )}
  </>
);

const mapStateToProps = (state: StoreState): StateProps => ({
  loading: state.app.loading,
});

export default connect(mapStateToProps)(React.memo(Main));
