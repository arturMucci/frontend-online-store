import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { category, fetchCategory } = this.props;
    return (
      <div>
        {category.map(({ name, id }) => (
          <button
            key={ id }
            type="button"
            data-testid="category"
            value={ id }
            onClick={ fetchCategory }
          >
            {name}
          </button>))}
      </div>
    );
  }
}
Categories.propTypes = {
  category: PropTypes.array,
  fetchCategory: PropTypes.func,
}.isRequired;
