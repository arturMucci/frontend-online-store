import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { thumbnail, title, price, id } = this.props;
    return (
      <span>
        <Link to={ `/productdetails/${id}` } data-testid="product-detail-link">
          <li data-testid="product">
            <h4>
              { title }
            </h4>
            <img src={ thumbnail } alt={ title } />
            <p>
              { price }
            </p>
            <button type="button">
              Adicionar ao carrinho
            </button>
          </li>
        </Link>
      </span>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
