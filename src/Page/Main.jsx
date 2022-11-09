import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { getCategories } from '../services/api';
// import ProductCard from '../Components/ProductCard';

class Main extends Component {
  // state = {
  //   input: '',
  //   products: [],
  // };

  // search = async () => {
  //   const { input } = this.state;
  //   const response = await getCategories(input);
  //   this.setState({
  //     products: response,
  //   });
  // };

  // handleChange = ({ target }) => {
  //   const { value } = target;
  //   this.setState({
  //     input: value,
  //   });
  // };

  render() {
    // const { input, products } = this.state;
    return (
      <>
        <form>
          <label htmlFor="home-initial-message">
            <input
            // onChange={ this.handleChange }
              placeholder="Search"
              // value={ input }
              type="text"
              id="home-initial-message"
            />
            <button
              type="submit"
            >
              Search
            </button>
          </label>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          {/* <ul>
      {products.length > 0
        ? products.map((productCard) => (
          <ProductCard
            key={ productCard }
            product={ productCard }
          />))
        : 'Digite algum termo de pesquisa ou escolha uma categoria.'}
    </ul> */}
        </form>
        <div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <i className="fa-solid fa-cart-shopping" />
          </Link>
        </div>
      </>
    );
  }
}

export default Main;
