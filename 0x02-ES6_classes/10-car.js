export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() { return (this._brand); }

  get motor() { return (this._motor); }

  get color() { return (this._color); }

  set brand(value) {
    // if (typeof value !== 'string') throw new TypeError('Brand must be a string');
    this._brand = value;
  }

  set motor(value) {
    // if (typeof value !== 'string') throw new TypeError('Motor must be a string');
    this._motor = value;
  }

  set color(value) {
    // if (typeof value !== 'string') throw new TypeError('Color must be a string');
    this._color = value;
  }

  cloneCar() {
    return (new this.constructor());
  }
}
