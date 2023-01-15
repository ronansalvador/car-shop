import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import MongoModel from '../Models/AbstractODM';
import CarModel from '../Models/CarModel';

export default class CarService {
  private CarModel: MongoModel<ICar>;

  constructor(Model = CarModel) {
    this.CarModel = new Model();
  }

  private static createCarDomain(car: ICar): Car {
    return new Car(car);
  }

  static validateCarId(id: string): void {
    if (id.length !== 24) {
      throw new Error('Invalid mongo id');
    }
  }

  public async create(carInfo: ICar): Promise<Car> {
    const createdCar = await this.CarModel.create(carInfo);
    const DCar = CarService.createCarDomain(createdCar);
    return DCar;
  }

  public async findAll(): Promise<ICar[]> {
    return this.CarModel.findAll();
  }

  public async findById(id: string): Promise<Car> {
    CarService.validateCarId(id);
    const car = await this.CarModel.findById(id);

    if (car === null) throw new Error('Car not found');

    const domainCar = CarService.createCarDomain(car);
    return domainCar;
  }

  private async validate(id: string): Promise<void> {
    await this.findById(id);
  }

  public async update(id: string, obj: ICar): Promise<Car> {
    await CarService.validateCarId(id);
    await this.validate(id);
    await this.CarModel.update(id, obj);

    return this.findById(id);
  }
}