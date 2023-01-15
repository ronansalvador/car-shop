import { Router } from 'express';

const routes = Router();

routes.get(
  '/motorcycles',
  () => console.log('rota motorcycles'),
);

export default routes;