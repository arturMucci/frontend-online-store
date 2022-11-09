import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Page/Main';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ Main } />
      </Switch>
    );
  }
}

export default Routes;
