import React from 'react';
import { connect } from 'react-redux';

import '^/index.scss';
import { StoreState } from '^/types';
import Main from '^/components/main';
import Hello from '^/components/hello';
import LogoPath from '^images/logo.png';

export interface StateProps {
  loading: boolean;
}

export type Props = StateProps;

const App: React.FunctionComponent<Props> = ({ loading }) => (
  <>
    {loading ? (
      <img className="loading-icon" src={LogoPath} />
    ) : (
      <Main>
        <Hello compiler="TypeScript" framework="React" />
      </Main>
    )}
  </>
);

const mapStateToProps = (state: StoreState): StateProps => ({
  loading: state.app.loading,
});

export default connect(mapStateToProps)(React.memo(App));
