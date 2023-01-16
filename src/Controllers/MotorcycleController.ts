import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction, Service = MotorcycleService) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new Service();
  }

  async create() {
    const newMotorcycle = await this.service.create(this.req.body);
    return this.res.status(201).json(newMotorcycle);
  }

  async findAll() {
    try {
      const cars = await this.service.findAll();
      return this.res.status(200).json(cars);
    } catch (e) {
      this.next(e);
    }
  }

  async findById() {
    const { id } = this.req.params;

    try {
      const car = await this.service.findById(id);      
      return this.res.status(200).json(car);
    } catch (e) {      
      this.next(e);
    }
  }

  public async update() {
    const { id } = this.req.params;

    try {
      const carUpdate = await this.service.update(id, this.req.body);
      return this.res.status(200).json(carUpdate);
    } catch (e) {
      this.next(e);
    }
  }
}