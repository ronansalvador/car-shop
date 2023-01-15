import IMotorcycle from '../../src/Interfaces/IMotorcycle';

const createMotorcycle: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const createdMotorcycle = {
  ...createMotorcycle,
  id: '63c40ae5c3608a04fca388ae',
};

export { createMotorcycle, createdMotorcycle };