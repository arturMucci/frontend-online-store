import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/cartProduct.css';

export default class CartProduct extends Component {
  state = {
    quantity: '1',
  };

  handleAmount = ({ target }) => {
    const { id } = target;
    const { quantity } = this.state;
    if (id === 'minus' && Number(quantity) > 1) {
      this.setState({ quantity: Number(quantity) - 1 });
    } else if (id === 'plus') {
      this.setState({ quantity: Number(quantity) + 1 });
    }
    if (id === 'quantityProd' && Number(quantity) >= 1) {
      const { value } = target;
      this.setState({ quantity: value });
    }
  };

  render() {
    const { quantity } = this.state;
    const { thumbnail, title, price } = this.props;
    return (
      <div>
        <button type="button" className="btn-remove">
          <i className="fa-solid fa-xmark" />
        </button>
        <img src={ thumbnail } alt={ title } />
        <label htmlFor="minus">
          {' '}
          <i className="fa-solid fa-minus" />
          <input
            className="btn-iteration minus"
            type="button"
            id="minus"
            onClick={ this.handleAmount }
            data-testid="product-decrease-quantity"
          />
        </label>
        <label htmlFor="quantityProd">
          <input
            className="amount"
            type="number"
            value={ quantity }
            id="quantityProd"
            onChange={ this.handleAmount }
          />
        </label>
        <label htmlFor="plus">
          {' '}
          <i className="fa-solid fa-plus" />
          <input
            className="btn-iteration plus"
            type="button"
            id="plus"
            onClick={ this.handleAmount }
            data-testid="product-increase-quantity"
          />
        </label>
        <p>{ price }</p>
      </div>
    );
  }
}

CartProduct.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  // id: PropTypes.string.isRequired,
};
