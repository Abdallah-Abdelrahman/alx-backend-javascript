import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return (this._floors);
  }

  set floors(value) {
    if (!Array.isArray(value)) throw TypeError('Floor must be an Array');
    this._floors = value;
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}
