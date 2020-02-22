import React from "react";
import { connect } from "react-redux";

import { StoreState } from "^/types";

export interface OwnProps {
  compiler: string;
  framework: string;
}

export interface StateProps {
  loading: boolean;
}

export type Props = OwnProps & StateProps;

const Hello: React.FunctionComponent<Props> = ({
  compiler,
  framework,
  loading,
}) => (
  <h1>
    Hello from {compiler} and {framework}!{loading}
  </h1>
);

const mapStateToProps = (state: StoreState): StateProps => ({
  loading: state.app.loading,
});

export default connect(mapStateToProps)(React.memo(Hello));
