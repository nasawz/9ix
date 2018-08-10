import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import * as React from 'react';

export interface MainRouresProps {}

export default function MainRoures(props: MainRouresProps) {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route
          path="/home"
          render={(props) => {
            return <div>9ix</div>;
          }}
        />
      </Switch>
    </Router>
  );
}
