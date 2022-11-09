import React, { Component } from 'react';
import { getCategories } from '../services/api';

// input.addEventListener("keypress", function (event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });

class Main extends Component {
  state = {
    input: '',
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      input: value,
    });
  };

  search = async (evt) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      await getCategories(evt.target.value);
    }
  };

  render() {
    const { input } = this.state;
    return (
      <form>
        <label htmlFor="home-initial-message">
          <input
            data-testid="home-initial-message"
            onChange={ this.handleChange }
            placeholder="Search"
            keypress={ this.search }
            value={ input }
            type="text"
            id="home-initial-message"
          />
          {/* <button
            type="submit"
            onClick={ this.search }
          >
            Search
          </button> */}
        </label>
        { }
      </form>
    );
  }
}

export default Main;
