import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '^/types';

import '^/index.scss';
import Header from '^/components/header';
import Footer from '^/components/footer';
import LogoPath from '^images/logo.png';

export interface StateProps {
  loading: boolean;
}

export interface Props extends StateProps {
  children: React.ReactNode;
}

const Main: React.FunctionComponent<Props> = ({ loading, children }) => (
  <>
    {loading ? (
      <img className="loading-icon" src={LogoPath} />
    ) : (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    )}
  </>
);

const mapStateToProps = (state: StoreState): StateProps => ({
  loading: state.app.loading,
});

export { Main as UnwrappedMain };

export default connect(mapStateToProps)(React.memo(Main));
