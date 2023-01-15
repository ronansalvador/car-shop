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
}