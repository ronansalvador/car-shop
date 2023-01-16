import IMotorcycle from '../../src/Interfaces/IMotorcycle';

const moto1 = 'Honda Cb 600f Hornet';

const createMotorcycle: IMotorcycle = {
  model: moto1,
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

const motorcycleMock = [
  {
    id: '63c40ae5c3608a04fca388ae',
    model: moto1,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

const motoUpdated: IMotorcycle = {
  model: moto1,
  year: 2020,
  color: 'Black',
  status: true,
  buyValue: 50.000,
  category: 'Street',
  engineCapacity: 600,
};

const updatedMoto = {
  ...motoUpdated,
  id: '63c1d0fcd07bd503590aa8df',
};

export { createMotorcycle, createdMotorcycle, motorcycleMock, updatedMoto, motoUpdated };