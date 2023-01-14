const createCar = {
  model: 'Creta',
  year: 2023,
  color: 'Prata',
  status: true,
  buyValue: 115.000,
  doorsQty: 4,
  seatsQty: 5,
};

const CarCreated = {
  ...createCar,
  id: '63c1e93907662f857d21a367',
};

const carsMock = [
  {
    model: 'Creta',
    year: 2023,
    color: 'Prata',
    status: true,
    buyValue: 115.000,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    model: 'HRV',
    year: 2020,
    color: 'Black',
    buyValue: 85.000,
    doorsQty: 4,
    seatsQty: 5,
  },
];

export { createCar, CarCreated, carsMock };