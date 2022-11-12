// import PropTypes from 'prop-types'
import React, { Component } from 'react';
import CartProduct from '../Components/CartProduct';

export default class Card extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    if (storage) {
      this.setState({ products: storage });
    }
  }

  updateItems = (obj) => {
    this.setState({ products: obj });
  };

  productsList = () => {
    const { products } = this.state;
    return products.map((product) => (<CartProduct
      { ...product }
      key={ product.id }
      updateItems={ this.updateItems }
    />));
  };

  render() {
    const { products } = this.state;
    const emptyCartText = (
      <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
    );

    return (
      <div>
        { products.length === 0 ? emptyCartText
          : this.productsList()}
      </div>
    );
  }
}
