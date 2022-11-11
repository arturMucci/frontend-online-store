import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Page/Main';
import Cart from '../Page/Cart';
import ProductDetails from '../Page/ProductDetails';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ () => <Main /> } />
        <Route exact path="/cart" render={ () => <Cart /> } />
        <Route exact path="/productdetails/:id" component={ ProductDetails } />
      </Switch>
    );
  }
}

export default Routes;
