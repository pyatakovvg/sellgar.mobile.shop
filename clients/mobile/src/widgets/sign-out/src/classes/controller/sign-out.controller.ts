import { ClearAuthUserDataUsecaseInterface, SessionLogoutUsecaseInterface } from '@library/domain';
import { Controller, Inject, SessionRuntimeStateInterface } from '@sellgar/app';

import { SignOutControllerInterface } from './sign-out-controller.interface.ts';

@Controller()
export class SignOutController implements SignOutControllerInterface {
  constructor(
    @Inject(ClearAuthUserDataUsecaseInterface)
    private readonly clearAuthUserData: ClearAuthUserDataUsecaseInterface,
    @Inject(SessionLogoutUsecaseInterface)
    private readonly logout: SessionLogoutUsecaseInterface,
    @Inject(SessionRuntimeStateInterface)
    private readonly session: SessionRuntimeStateInterface,
  ) {}

  async action({ signal }: Parameters<SignOutControllerInterface['action']>[0]): Promise<void> {
    try {
      await this.logout.execute();
    } finally {
      if (!signal.aborted) {
        this.clearAuthUserData.execute();
        this.session.setAnonymous();
      }
    }
  }
}
