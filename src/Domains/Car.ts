import ICar from '../Interfaces/ICar';

export default class Car {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private buyValue: number;
  private status: boolean | undefined;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.buyValue = car.buyValue;
    this.status = car.status;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}