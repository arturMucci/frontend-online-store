// import PropTypes from 'prop-types'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProduct from '../Components/CartProduct';

class Cart extends Component {
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

  redirectToCheckout = () => {
    const { history } = this.props;
    history.push('/checkout');
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
        <button
          type="button"
          data-testid="checkout-products"
          onClick={ this.redirectToCheckout }
        >
          Finalizar compra
        </button>
      </div>
    );
  }
}
Cart.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
export default Cart;
