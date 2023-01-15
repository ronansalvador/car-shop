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
}