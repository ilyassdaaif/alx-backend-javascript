import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateNumber(amount, 'Amount');
    this._currency = this._validateCurrency(currency, 'Currency');
  }

  _validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  _validateCurrency(value, attribute) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attribute} must be an instance of Currency`);
    }
    return value;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = this._validateNumber(value, 'Amount');
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = this._validateCurrency(value, 'Currency');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
