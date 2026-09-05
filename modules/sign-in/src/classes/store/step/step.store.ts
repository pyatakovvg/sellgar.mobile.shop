import { Injectable } from '@sellgar/app';
import { observable, action, makeAutoObservable } from 'mobx';

import { StepStoreInterface, type TStep } from './step-store.interface.ts';

@Injectable()
export class StepStore implements StepStoreInterface {
  @observable step: TStep = 'SIGN_IN';

  constructor() {
    makeAutoObservable(this);
  }

  @action.bound
  nextStep(step: TStep) {
    this.step = step;
  }
}
