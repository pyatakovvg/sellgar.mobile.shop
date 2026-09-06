import { ClearAuthUserDataUsecaseInterface } from '@library/domain';
import { CheckPhoneRoute } from '@library/route-tokens';
import { Controller, Inject, NavigateServiceInterface } from '@sellgar/app';

import { ExitSignInByCodeControllerInterface } from './exit-sign-in-by-code-controller.interface.ts';

@Controller()
export class ExitSignInByCodeController extends ExitSignInByCodeControllerInterface {
  constructor(
    @Inject(ClearAuthUserDataUsecaseInterface)
    private readonly clearAuthUserData: ClearAuthUserDataUsecaseInterface,
    @Inject(NavigateServiceInterface)
    private readonly navigate: NavigateServiceInterface,
  ) {
    super();
  }

  async action(): Promise<void> {
    this.clearAuthUserData.execute();
    await this.navigate.to(CheckPhoneRoute, { replace: true });
  }
}
