import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../Components/ProductCard';

class Main extends Component {
  state = {
    categories: [],
    inputSearch: '',
    products: [],
    actCat: '',
  };

  componentDidMount() {
    this.fetchGetCategories();
  }

  fetchGetCategories = async () => {
    const response = await getCategories();
    this.setState({ categories: response });
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      inputSearch: value,
    });
  };

  productsAPI = async () => {
    const { inputSearch, actCat } = this.state;
    const param = actCat;
    const productsList = await getProductsFromCategoryAndQuery(param, inputSearch);
    this.setState({ products: productsList.results });
  };

  render() {
    const { categories, inputSearch, products } = this.state;
    const showCategories = categories
      .map(({ name }, i) => (
        <button
          key={ i }
          type="button"
          className="categoryButton"
          data-testid="category"
          onClick={ this.productsAPI }
        >
          {name}
        </button>));

    const showProducts = products.map(({ thumbnail, title, price, id,
    }) => (
      <ProductCard
        key={ id }
        thumbnail={ thumbnail }
        title={ title }
        price={ price }
      />
    ));

    return (
      <div>
        <form>
          <label htmlFor="home-initial-message">
            <input
              onChange={ this.handleChange }
              placeholder="Search"
              value={ inputSearch }
              type="text"
              id="home-initial-message"
              data-testid="query-input"
            />
            <button
              className="searchButton"
              type="button"
              data-testid="query-button"
              onClick={ this.productsAPI }
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
          {showCategories}
        </form>
        {products.length ? <ul>{showProducts}</ul> : <p>Nenhum produto foi encontrado</p>}
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
