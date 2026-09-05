import { uuid } from '@utils/generate';
import { type PendingIdentificationEntity } from '@library/domain';

import { Injectable } from '@sellgar/app';
import { observable, action, computed, makeAutoObservable } from 'mobx';

import { SignInStoreInterface, type TReidentificationPhase } from './sign-in-store.interface.ts';

@Injectable()
export class SignInStore implements SignInStoreInterface {
  @observable private _inProcess: boolean = false;
  @observable private _requestUuid: string = '';
  @observable private _pendingIdentification: PendingIdentificationEntity | null = null;
  @observable private _reidentificationPhase: TReidentificationPhase = 'idle';

  constructor() {
    makeAutoObservable(this);
    this.generateRequestUuid();
  }

  @computed
  get requestUuid() {
    return this._requestUuid;
  }

  @action.bound
  generateRequestUuid() {
    this._requestUuid = uuid();
  }

  @computed
  get inProcess() {
    return this._inProcess;
  }

  @action.bound
  setProcess(state: boolean) {
    this._inProcess = state;
  }

  @computed
  get pendingIdentification() {
    return this._pendingIdentification;
  }

  @computed
  get reidentificationPhase() {
    return this._reidentificationPhase;
  }

  @action.bound
  startReidentification(identification: PendingIdentificationEntity) {
    this._pendingIdentification = identification;
    this._reidentificationPhase = 'confirmation';
  }

  @action.bound
  setReidentificationPhase(phase: TReidentificationPhase) {
    this._reidentificationPhase = phase;
  }

  @action.bound
  clearReidentification() {
    this._pendingIdentification = null;
    this._reidentificationPhase = 'idle';
  }
}
