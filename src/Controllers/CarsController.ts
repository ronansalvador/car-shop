import { Request, Response } from 'express';
import CarService from '../Services/CarsService';

export default class CarsController {
  private req: Request;
  private res: Response;
  private service: CarService;

  constructor(req: Request, res: Response, Service = CarService) {
    this.req = req;
    this.res = res;
    this.service = new Service();
  }

  async create() {
    const newCar = await this.service.create(this.req.body);
    return this.res.status(201).json(newCar);
  }
}