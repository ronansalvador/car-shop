import express from 'express';
import carRoute from './routes/CarsRoute';

const app = express();
app.use(express.json());
app.use(carRoute);

export default app;
