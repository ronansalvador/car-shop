import express from 'express';
import ErrorCatalog from './Middlewares/ErrorCatalog';
import carRoute from './routes/CarsRoute';

const app = express();
app.use(express.json());
app.use(carRoute);
app.use(ErrorCatalog);

export default app;
