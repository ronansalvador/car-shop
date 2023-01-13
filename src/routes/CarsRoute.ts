import { Router } from 'express';
import CarController from '../Controllers/CarsController';

const routes = Router();

routes.post(
  '/cars',
  (req, res) => new CarController(req, res).create(),
);

export default routes;