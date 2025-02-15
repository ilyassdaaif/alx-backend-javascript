export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Species = Symbol(this.constructor[Symbol.species] || this.constructor);
    return new this.constructor();
  }

  static get [Symbol.species]() {
    return this;
  }
}