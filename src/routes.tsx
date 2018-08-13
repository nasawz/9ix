import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import * as React from 'react';

import Home from './views/home';
import Reg from './views/reg';
import Login from './views/login';
import Info from './views/info';
import UCenter from './views/ucenter';

export interface MainRouresProps {}

export default function MainRoures(props: MainRouresProps) {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route path="/home" component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
        <Route path="/ucenter" component={UCenter} />
      </Switch>
    </Router>
  );
}
