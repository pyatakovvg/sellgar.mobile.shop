import { Injectable } from '@sellgar/app';
import { action, computed, makeObservable, observable } from 'mobx';

import { AccessCodeStoreInterface } from './access-code-store.interface.ts';

@Injectable()
export class AccessCodeStore extends AccessCodeStoreInterface {
  private code: string | null = null;

  constructor() {
    super();
    makeObservable<this, 'code'>(this, {
      clear: action,
      code: observable,
      confirmation: computed,
      set: action,
    });
  }

  get confirmation(): boolean {
    return this.code !== null;
  }

  get value(): string | null {
    return this.code;
  }

  clear(): void {
    this.code = null;
  }

  set(value: string): void {
    this.code = value;
  }
}
