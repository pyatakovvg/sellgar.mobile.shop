import { SessionCreateUsecaseInterface } from '@library/domain';
import { Controller, Inject, SessionRuntimeStateInterface, UserRequestServiceInterface } from '@sellgar/app';

import { AccessCodesMismatchError } from '../../error/access-codes-mismatch.error.ts';
import { AccessCodeStoreInterface } from '../../store/access-code-store.interface.ts';
import { ConfirmAccessCodeControllerInterface } from './confirm-access-code-controller.interface.ts';

@Controller()
export class ConfirmAccessCodeController extends ConfirmAccessCodeControllerInterface {
  constructor(
    @Inject(AccessCodeStoreInterface)
    private readonly accessCode: AccessCodeStoreInterface,
    @Inject(SessionCreateUsecaseInterface)
    private readonly sessionCreate: SessionCreateUsecaseInterface,
    @Inject(SessionRuntimeStateInterface)
    private readonly session: SessionRuntimeStateInterface,
    @Inject(UserRequestServiceInterface)
    private readonly userRequest: UserRequestServiceInterface,
  ) {
    super();
  }

  async action({ payload }: Parameters<ConfirmAccessCodeControllerInterface['action']>[0]): Promise<void> {
    if (payload.code !== this.accessCode.value) {
      throw new AccessCodesMismatchError();
    }

    try {
      await this.sessionCreate.execute(payload.code);
    } catch (error) {
      await this.userRequest.alert({
        description: 'Попробуйте повторить операцию позже',
        title: 'Что-то пошло не так',
      });
      throw error;
    }

    this.accessCode.clear();
    this.session.setAuthenticated();
  }
}
