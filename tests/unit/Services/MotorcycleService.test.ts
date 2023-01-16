import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { createMotorcycle, createdMotorcycle, motorcycleMock } from '../../Mock/MotorcycleMock';

describe('Testes MotorcycleService', function () {
  const motorcycleService = new MotorcycleService();

  afterEach(function () {
    sinon.restore();
  });
  it('Verifica se é possível criar uma nova moto', async function () {
    sinon.stub(Model, 'create').resolves(createdMotorcycle);

    const service = new MotorcycleService();
    const created = await service.create(createMotorcycle);

    expect(created).to.be.deep.equal(createdMotorcycle);
  });
  it('Verifica erro se uma nova moto não for criada', async function () {
    try {
      await motorcycleService.create({
        model: '',
        year: 2022,
        color: 'Black',
        buyValue: 15.900,
        category: 'Street',
        engineCapacity: 600,
      });
    } catch (err) {
      expect((err as Error).message).to.be
        .equal('Motorcycle validation failed: model: Path `model` is required.');
    }
  });

  it('Verifica se é possível buscar todas as motos', async function () {
    sinon.stub(Model, 'find').resolves(motorcycleMock);

    const fetchCars = await motorcycleService.findAll();

    expect(fetchCars).to.deep.equal(motorcycleMock);
  });

  it('Verifica se é possível buscar uma moto por id', async function () {
    sinon.stub(Model, 'findOne').resolves(createdMotorcycle);

    const findById = await motorcycleService.findById('63c40ae5c3608a04fca388ae');

    expect(findById).to.deep.equal(createdMotorcycle);
  });

  it('Ocorre um erro ao procurar o id de uma moto que não existe', async function () {
    sinon.stub(Model, 'findOne').resolves(null);

    try {
      await motorcycleService.findById('634852326b35b59438fbea2f');
    } catch (err) {
      expect((err as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  it('Verifica erro ao tentar buscar por um id com formato inválido', async function () {
    sinon.stub(Model, 'findOne').resolves(null);

    try {
      await motorcycleService.findById('1234');
    } catch (err) {
      expect((err as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});