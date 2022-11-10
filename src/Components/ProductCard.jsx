import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { thumbnail, title, price } = this.props;
    return (

      <li data-testid="product">
        <h4>
          { title }
        </h4>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <button type="button">
          Adicionar ao carrinho
        </button>
      </li>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
