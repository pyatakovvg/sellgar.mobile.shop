import { ReidentificationFlowServiceInterface } from '@library/domain';
import { ReidentificationRoute } from '@library/route-tokens';
import { Controller, Exception, Inject, NavigateServiceInterface } from '@sellgar/app';

import { ReidentificationConfirmControllerInterface } from './reidentification-confirm-controller.interface.ts';

@Controller()
export class ReidentificationConfirmController extends ReidentificationConfirmControllerInterface {
  constructor(
    @Inject(NavigateServiceInterface)
    private readonly navigate: NavigateServiceInterface,
    @Inject(ReidentificationFlowServiceInterface)
    private readonly reidentification: ReidentificationFlowServiceInterface,
  ) {
    super();
  }

  async action({ payload }: Parameters<ReidentificationConfirmControllerInterface['action']>[0]): Promise<void> {
    if (payload === 'confirm') {
      await this.navigate.to(ReidentificationRoute, { replace: true });
      return;
    }

    this.reidentification.clear();
    await this.navigate.back();
  }

  async loader(): Promise<void> {
    if (!this.reidentification.getPendingIdentification()) {
      throw new Exception('Re-identification flow is not initialized.');
    }
  }
}
