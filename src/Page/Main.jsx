import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Components/Categories';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
// import ProductCard from '../Components/ProductCard';

class Main extends Component {
  state = {
    categories: [],
    products: [],
  };

  componentDidMount() {
    this.fetchGetCategories();
  }

  fetchGetCategories = async () => {
    const response = await getCategories();
    this.setState({ categories: response });
  };
  // search = async () => {
  //   const { input } = this.state;
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

  fetchCategoriesProduct = async (e) => {
    const { value } = e.target;
    const { results } = await getProductsFromCategoryAndQuery(value);
    this.setState({ products: results });
  };

  render() {
    const { categories, products } = this.state;
    console.log(products);
    return (
      <div>
        <Categories
          category={ categories }
          fetchCategory={ this.fetchCategoriesProduct }
        />
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
            // onClick={ this.search }
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
            : 'Digite algu´m termo de pesquisa ou escolha uma categoria.'}
        </ul> */}
        </form>
        <div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <i className="fa-solid fa-cart-shopping" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
