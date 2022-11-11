import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, addToCart } = this.props;
    const { thumbnail, title, price, id } = product;
    return (
      <span>
        <Link to={ `/productdetails/${id}` } data-testid="product-detail-link">
          <li data-testid="product">
            <h4>
              { title }
            </h4>
            <img src={ thumbnail } alt={ title } />
            <p>
              { price.toLocaleString('pt-BR', ({ style: 'currency', currency: 'BRL' })) }
            </p>
          </li>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          id={ id }
          onClick={ addToCart }
        >
          Adicionar ao carrinho
        </button>
      </span>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

// addToCart = (product) => {
//   console.log('Shazam Carai');
//   this.setState((prevState) => ({
//     products: [...prevState.products, product],
//   }));
// };

// const showProducts = products.map((product) => (
//   <ProductCard
//     key={ product.id }
//     product={ product }
//     addToCart={ this.addToCart }
//   />
// ));
