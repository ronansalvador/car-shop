import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(vehicleInfo: IVehicle) {
    this.id = vehicleInfo.id;
    this.model = vehicleInfo.model;
    this.year = vehicleInfo.year;
    this.color = vehicleInfo.color;
    this.status = vehicleInfo.status || false;
    this.buyValue = vehicleInfo.buyValue;
  }
}