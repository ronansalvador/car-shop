import { Router } from 'express';

const route = Router();

route.get('/', (req, res) => res.status(200).json({ message: 'teste' }));

export default route;