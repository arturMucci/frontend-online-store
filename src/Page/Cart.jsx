// import PropTypes from 'prop-types'
import React, { Component } from 'react';
import CartProduct from '../Components/CartProduct';

export default class Card extends Component {
  state = {
    products: [],
  };

  productsList = () => {
    const { products } = this.state;
    return products.map((product) => <CartProduct key={ product.id } { ...product } />);
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
        <CartProduct />
      </div>
    );
  }
}
