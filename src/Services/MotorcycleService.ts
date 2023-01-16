import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from '../Models/AbstractODM';
import MotorcycleModel from '../Models/MotorcycleModel';

export default class MotorcycleService {
  private MotorcycleModel: AbstractODM<IMotorcycle>;

  constructor(Model = MotorcycleModel) {
    this.MotorcycleModel = new Model();
  }

  private static createDomain(moto: IMotorcycle): Motorcycle {
    return new Motorcycle(moto);
  }

  public async create(motorcycle: IMotorcycle): Promise<Motorcycle> {
    const createdMotorcycle = await this.MotorcycleModel.create(motorcycle);
    const DMotorcycle = MotorcycleService.createDomain(createdMotorcycle);
    return DMotorcycle;
  }

  static validateCarId(id: string): void {
    if (id.length !== 24) {
      throw new Error('Invalid mongo id');
    }
  }

  public async findAll(): Promise<IMotorcycle[]> {
    return this.MotorcycleModel.findAll();
  }

  public async findById(id: string): Promise<Motorcycle> {
    MotorcycleService.validateCarId(id);
    const motorcycle = await this.MotorcycleModel.findById(id);

    if (motorcycle === null) throw new Error('Motorcycle not found');

    const domainMotorcycle = MotorcycleService.createDomain(motorcycle);
    return domainMotorcycle;
  }
}