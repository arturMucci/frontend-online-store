// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductCard from '../Components/ProductCard';

class Checkout extends Component {
  state = {
    inputName: '',
    inputEmail: '',
    inputCpf: '',
    inputTel: '',
    inputCep: '',
    inputAddress: '',
    paymentMethod: '',
    isDisabled: true,
  };

  componentDidUpdate(_prevProps, prevState) {
    const {
      inputName,
      inputEmail,
      inputCpf,
      inputAddress,
      inputCep,
      inputTel,
      paymentMethod,
    } = this.state;
    if (
      prevState.inputName !== inputName
       || prevState.inputEmail !== inputEmail
       || prevState.inputCpf !== inputCpf
       || prevState.inputAddress !== inputAddress
       || prevState.inputCep !== inputCep
       || prevState.inputTel !== inputTel
       || prevState.paymentMethod !== paymentMethod) {
      this.verifySubmitBtn();
    }
  }

  verifySubmitBtn = () => {
    const {
      inputName,
      inputEmail,
      inputCpf,
      inputAddress,
      inputCep,
      inputTel,
      paymentMethod,
    } = this.state;

    const cpfMinNumber = 11;

    const name = inputName.length;
    const email = inputEmail.length;
    const cpf = inputCpf.length >= cpfMinNumber;
    const address = inputAddress.length;
    const cep = inputCep.length;
    const tel = inputTel.length;
    const payment = paymentMethod.length;

    const conditions = name && email && cpf && address && cep && tel && payment;
    this.setState({ isDisabled: !conditions });
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const cartProducts = JSON.parse(localStorage.getItem('cartItems'));
    const {
      inputName,
      inputEmail,
      inputCpf,
      inputAddress,
      inputCep,
      inputTel,
      paymentMethod,
      isDisabled,
    } = this.state;
    return (
      <div>
        {
          cartProducts.map(
            (product) => (
              <ProductCard
                product={ product }
                key={ product.id }
                isCheckout
              />),
          )
        }
        <form>
          <label
            htmlFor="checkout-fullname"
          >
            Nome Completo
            <input
              type="text"
              id="checkout-fullname"
              name="inputName"
              data-testid="checkout-fullname"
              value={ inputName }
              onChange={ this.handleChange }
            />
          </label>
          <label
            htmlFor="checkout-email"
          >
            Email
            <input
              type="email"
              id="checkout-email"
              name="inputEmail"
              data-testid="checkout-email"
              value={ inputEmail }
              onChange={ this.handleChange }
            />
          </label>
          <label
            htmlFor="checkout-cpf"
          >
            CPF
            <input
              type="text"
              id="checkout-cpf"
              name="inputCpf"
              data-testid="checkout-cpf"
              value={ inputCpf }
              onChange={ this.handleChange }
            />
          </label>
          <label
            htmlFor="checkout-phone"
          >
            Telefone
            <input
              type="tel"
              id="checkout-phone"
              name="inputTel"
              data-testid="checkout-phone"
              value={ inputTel }
              onChange={ this.handleChange }
            />
          </label>
          <label
            htmlFor="checkout-cep"
          >
            CEP
            <input
              type="text"
              id="checkout-cep"
              name="inputCep"
              data-testid="checkout-cep"
              value={ inputCep }
              onChange={ this.handleChange }
            />
          </label>
          <label
            htmlFor="checkout-address"
          >
            Endereço
            <input
              type="text"
              id="checkout-address"
              name="inputAddress"
              data-testid="checkout-address"
              value={ inputAddress }
              onChange={ this.handleChange }
            />
          </label>
          <div>
            <p>Formas de pagamento:</p>
            <label htmlFor="boleto">
              Boleto
              <input
                type="radio"
                data-testid="ticket-payment"
                value="boleto"
                id="boleto"
                name="paymentMethod"
                checked={ paymentMethod === 'boleto' }
                onChange={ this.handleChange }
              />
            </label>
            <br />
            <label htmlFor="visa">
              Visa
              <input
                type="radio"
                data-testid="visa-payment"
                value="visa"
                id="visa"
                name="paymentMethod"
                checked={ paymentMethod === 'visa' }
                onChange={ this.handleChange }
              />
            </label>
            <br />
            <label htmlFor="master">
              MasterCard
              <input
                type="radio"
                data-testid="master-payment"
                value="master"
                id="master"
                name="paymentMethod"
                checked={ paymentMethod === 'master' }
                onChange={ this.handleChange }
              />
            </label>
            <br />
            <label htmlFor="elo">
              Elo
              <input
                type="radio"
                data-testid="elo-payment"
                value="elo"
                id="elo"
                name="paymentMethod"
                checked={ paymentMethod === 'elo' }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <button
            data-testid="checkout-btn"
            type="submit"
            disabled={ isDisabled }
          >
            Comprar
          </button>
        </form>
      </div>
    );
  }
}

export default Checkout;
