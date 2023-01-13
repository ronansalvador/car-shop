import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarsService';

export default class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction, Service = CarService) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new Service();
  }

  async create() {
    const newCar = await this.service.create(this.req.body);
    return this.res.status(201).json(newCar);
  }
}