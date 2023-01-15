import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { createMotorcycle, createdMotorcycle } from '../../Mock/MotorcycleMock';

describe('Testes MotorcycleService', function () {
  it('Verifica se é possível criar uma nova moto', async function () {
    sinon.stub(Model, 'create').resolves(createdMotorcycle);

    const service = new MotorcycleService();
    const created = await service.create(createMotorcycle);

    expect(created).to.be.deep.equal(createdMotorcycle);
  });
});