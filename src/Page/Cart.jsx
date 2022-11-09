// import PropTypes from 'prop-types'
import React, { Component } from 'react';

export default class Card extends Component {
  state = {
    products: [],
  };

  render() {
    const { products } = this.state;
    const emptyCartText = (
      <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
    );

    return (
      <div>
        { products.length === 0 ? emptyCartText
          : <div />}
      </div>
    );
  }
}
