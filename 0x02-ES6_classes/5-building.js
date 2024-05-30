export default class Building {
  constructor(sqft) {
    const childProto = Object.getPrototypeOf(this);
    const props = Object.getOwnPropertyNames(childProto);

    if (this.constructor.name !== 'Building' && !props.includes('evacuationWarningMessage')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this.sqft = sqft;
  }

  get sqft() {
    return (this._sqft);
  }

  set sqft(value) {
    if (typeof value !== 'number') throw new TypeError('Sqft must be a number');
    this._sqft = value;
  }
}
