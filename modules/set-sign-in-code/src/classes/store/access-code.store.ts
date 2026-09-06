import { Injectable } from '@sellgar/app';

import { AccessCodeStoreInterface } from './access-code-store.interface.ts';

@Injectable()
export class AccessCodeStore extends AccessCodeStoreInterface {
  private code: string | null = null;

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
