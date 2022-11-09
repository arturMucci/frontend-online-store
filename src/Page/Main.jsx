import React, { Component } from 'react';
import { getCategories } from '../services/api';
// import ProductCard from '../Components/ProductCard';

class Main extends Component {
  state = {
    categories: [],
    // products: [],
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

  render() {
    const { categories } = this.state;
    const showCategories = categories
      .map(({ name }, i) => (
        <button key={ i } type="submit" data-testid="category">{name}</button>));
    return (
      <div>
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
            : 'Digite algum termo de pesquisa ou escolha uma categoria.'}
        </ul> */}
          {showCategories}
        </form>
      </div>
    );
  }
}

export default Main;
