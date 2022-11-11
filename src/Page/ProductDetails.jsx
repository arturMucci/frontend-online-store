import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

export default class ProductDetails extends Component {
  state = {
    title: '',
    price: '',
    thumbnail: '',
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getProduct(id);
  }

  getProduct = async (id) => {
    // const { param } = this.props;
    const product = await getProductById(id);
    console.log(product);

    this.setState({
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
    });
  };

  render() {
    const { title, price, thumbnail } = this.state;

    return (
      <div>
        <h4 data-testid="product-detail-name">{ title }</h4>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <p data-testid="product-detail-price">
          { price }
        </p>
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
