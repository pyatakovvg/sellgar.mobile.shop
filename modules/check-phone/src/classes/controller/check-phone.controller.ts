import { AuthServiceInterface } from '@library/domain';
import { Controller, Inject } from '@sellgar/app';
import { uuid } from '@utils/generate';

import { CheckPhoneControllerInterface, type CheckPhoneResult } from './check-phone-controller.interface.ts';

@Controller()
export class CheckPhoneController extends CheckPhoneControllerInterface {
  constructor(
    @Inject(AuthServiceInterface)
    private readonly authService: AuthServiceInterface,
  ) {
    super();
  }

  async action({ payload }: Parameters<CheckPhoneControllerInterface['action']>[0]): Promise<CheckPhoneResult> {
    const requestUuid = uuid();
    const result = await this.authService.startAuth({ phone: payload.phone, requestUuid });

    return Object.freeze({
      nextAction: result.nextAction,
      phone: payload.phone,
      requestUuid,
      verification: result.verification,
    });
  }
}
