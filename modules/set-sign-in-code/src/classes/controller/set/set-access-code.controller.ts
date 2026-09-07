import { BackServiceInterface, Controller, Inject, type BackInterception } from '@sellgar/app';

import { AccessCodeStoreInterface } from '../../store/access-code-store.interface.ts';
import { SetAccessCodeControllerInterface, type SetAccessCodeResult } from './set-access-code-controller.interface.ts';

@Controller()
export class SetAccessCodeController extends SetAccessCodeControllerInterface {
  private readonly backInterception: BackInterception;

  constructor(
    @Inject(BackServiceInterface)
    back: BackServiceInterface,
    @Inject(AccessCodeStoreInterface)
    private readonly accessCode: AccessCodeStoreInterface,
  ) {
    super();
    this.backInterception = back.intercept(
      () => this.accessCode.confirmation,
      () => this.accessCode.clear(),
    );
  }

  async action({ payload }: Parameters<SetAccessCodeControllerInterface['action']>[0]): Promise<SetAccessCodeResult> {
    this.accessCode.set(payload.code);

    return { step: 'confirm' };
  }

  dispose(): void {
    this.backInterception.dispose();
  }
}
