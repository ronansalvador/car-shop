import * as sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarsService from '../../../src/Services/CarsService';
import { carsMock, createCar, CarCreated } from '../../Mock/CarsMock';

describe('Testes CarService', function () {
  const carsService = new CarsService();

  afterEach(function () {
    sinon.restore();
  });

  it('Verifica se é possível criar um novo carro', async function () {
    sinon.stub(Model, 'create').resolves(CarCreated);

    const newCar = await carsService.create(createCar);

    expect(newCar).to.deep.equal(CarCreated);
  });

  it('Verifica erro se um novo carro não for criado', async function () {
    try {
      await carsService.create({
        model: '',
        year: 2022,
        color: 'Black',
        buyValue: 15.900,
        doorsQty: 4,
        seatsQty: 5,
      });
    } catch (err) {
      expect((err as Error).message).to.be
        .equal('Car validation failed: model: Path `model` is required.');
    }
  });

  it('Verifica se é possível achar todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(carsMock);

    const fetchCars = await carsService.findAll();

    expect(fetchCars).to.deep.equal(carsMock);
  });

  it('Verifica se é possível achar um carro por id', async function () {
    sinon.stub(Model, 'findOne').resolves(CarCreated);

    const findById = await carsService.findById('63c1e93907662f857d21a367');

    expect(findById).to.deep.equal(CarCreated);
  });

  it('Ocorre um erro ao procurar o id de um carro que não existe', async function () {
    sinon.stub(Model, 'findOne').resolves(null);

    try {
      await carsService.findById('63c1e93907662f857d21a367');
    } catch (err) {
      expect((err as Error).message).to.be.equal('Car not found');
    }
  });

  it('Verifica erro ao tentar buscar por um id com formato inválido', async function () {
    sinon.stub(Model, 'findOne').resolves(null);

    try {
      await carsService.findById('1234');
    } catch (err) {
      expect((err as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});