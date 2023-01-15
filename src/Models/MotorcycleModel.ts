import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MongoModel from './Model';

export default class MotorcycleModel extends MongoModel<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    }, {
      toJSON: {
        virtuals: true,
        versionKey: false,
      },
    });

    super(schema, 'Motorcycle');
  }
}