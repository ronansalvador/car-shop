import express from 'express';
import ErrorCatalog from './Middlewares/ErrorCatalog';
import carRoute from './routes/CarsRoute';
import motorcycleRoute from './routes/MotorcyclesRoute';

const app = express();
app.use(express.json());
app.use(carRoute);
app.use(motorcycleRoute);
app.use(ErrorCatalog);

export default app;
