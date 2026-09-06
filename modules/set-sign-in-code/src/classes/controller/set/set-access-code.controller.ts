import { Controller, Inject } from '@sellgar/app';

import { AccessCodeStoreInterface } from '../../store/access-code-store.interface.ts';
import { SetAccessCodeControllerInterface, type SetAccessCodeResult } from './set-access-code-controller.interface.ts';

@Controller()
export class SetAccessCodeController extends SetAccessCodeControllerInterface {
  constructor(
    @Inject(AccessCodeStoreInterface)
    private readonly accessCode: AccessCodeStoreInterface,
  ) {
    super();
  }

  async action({ payload }: Parameters<SetAccessCodeControllerInterface['action']>[0]): Promise<SetAccessCodeResult> {
    this.accessCode.set(payload.code);

    return { step: 'confirm' };
  }
}
