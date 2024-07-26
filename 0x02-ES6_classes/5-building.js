export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    
    // Check if the class extending Building has implemented evacuationWarningMessage
    if (this.constructor !== Building && 
        !this.constructor.prototype.hasOwnProperty('evacuationWarningMessage')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
