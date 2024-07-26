export default class Building {
    constructor(sqft) {
      this._sqft = this._validateNumber(sqft, 'Sqft');
      if (new.target === Building) {
        throw new Error("Building is an abstract class and cannot be instantiated directly");
      }
    }
  
    _validateNumber(value, attribute) {
      if (typeof value !== 'number') {
        throw new TypeError(`${attribute} must be a number`);
      }
      return value;
    }
  
    get sqft() {
      return this._sqft;
    }
  
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }  