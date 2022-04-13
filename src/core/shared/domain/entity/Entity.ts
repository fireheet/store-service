/* eslint-disable no-underscore-dangle */
import { Validation } from '@core/shared/data/sources';

export abstract class Entity {
  protected _id!: string;

  validation!: Validation;

  constructor() {
    this.validation = new Validation();
  }

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }
}
