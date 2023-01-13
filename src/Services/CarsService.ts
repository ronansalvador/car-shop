import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import MongoModel from '../Models/Model';
import CarModel from '../Models/CarModel';

export default class CarService {
  private CarModel: MongoModel<ICar>;

  constructor(Model = CarModel) {
    this.CarModel = new Model();
  }

  private static createCarDomain(car: ICar): Car {
    return new Car(car);
  }

  public async create(carInfo: ICar): Promise<Car> {
    const createdCar = await this.CarModel.create(carInfo);
    const DCar = CarService.createCarDomain(createdCar);
    return DCar;
  }
}