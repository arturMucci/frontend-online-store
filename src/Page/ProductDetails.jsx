/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

export default class ProductDetails extends Component {
  state = {
    product: {},
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getProduct(id);
  }

  getProduct = async (id) => {
    const product = await getProductById(id);
    this.setState({
      product,
    });
  };

  addProductToCart = () => {
    const { product } = this.state;
    const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    localStorage.setItem('cartItems', JSON.stringify([...cart, product]));
  };

  render() {
    const { product: { title, price, thumbnail } } = this.state;

    return (
      <div>
        <h4 data-testid="product-detail-name">{ title }</h4>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <p data-testid="product-detail-price">
          { price }
        </p>
        <button
          data-testid="product-detail-add-to-cart"
          id="button-add-to-cart"
          name="button-add-to-cart"
          type="button"
          onClick={ this.addProductToCart }
        >
          Adicionar ao carrinho
        </button>
        <div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <i className="fa-solid fa-cart-shopping" />
          </Link>
        </div>
      </div>

    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.func.isRequired,
};
