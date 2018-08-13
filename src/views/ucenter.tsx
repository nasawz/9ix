import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import UDashBoard from './u_dashboard';
import UWealth from './u_wealth';
import UStatement from './u_statement';
import UInfomation from './u_infomation';
import UCoin from './u_coin';

export interface UCenterProps {
  match;
}

export default class UCenter extends React.Component<UCenterProps, any> {
  public render() {
    let { match } = this.props;
    return (
      <Switch>
        <Redirect from={`${match.url}`} to={`${match.url}/dashboard`} exact />
        <Route path={`${match.url}/dashboard`} component={UDashBoard} />
        <Route path={`${match.url}/coin`} component={UCoin} />
        <Route path={`${match.url}/statement`} component={UStatement} />
        <Route path={`${match.url}/infomation`} component={UInfomation} />
        <Route path={`${match.url}/wealth`} component={UWealth} />
      </Switch>
    );
  }
}
