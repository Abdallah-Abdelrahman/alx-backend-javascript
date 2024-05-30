import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() { return (this._range); }

  cloneCar() {
    const parentProto = Object.getPrototypeOf(this);
    parentProto._brand = undefined;
    parentProto._motor = undefined;
    parentProto._color = undefined;
    return (parentProto);
  }
}
