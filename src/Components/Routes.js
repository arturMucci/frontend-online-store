import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from '../Page/Main';

class Routes extends Component {
  render() {
    return (
      <Route path="/" component={ Main } />
    );
  }
}

export default Routes;
