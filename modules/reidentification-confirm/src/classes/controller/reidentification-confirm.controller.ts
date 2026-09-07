import { ReidentificationFlowServiceInterface } from '@library/domain';
import { ReidentificationRoute, SignInRoute } from '@library/route-tokens';
import {
  BackServiceInterface,
  type BackInterception,
  Controller,
  Exception,
  Inject,
  NavigateServiceInterface,
} from '@sellgar/app';

import { ReidentificationConfirmControllerInterface } from './reidentification-confirm-controller.interface.ts';

@Controller()
export class ReidentificationConfirmController extends ReidentificationConfirmControllerInterface {
  private readonly backInterception: BackInterception;
  private phone: string | null = null;

  constructor(
    @Inject(BackServiceInterface)
    back: BackServiceInterface,
    @Inject(NavigateServiceInterface)
    private readonly navigate: NavigateServiceInterface,
    @Inject(ReidentificationFlowServiceInterface)
    private readonly reidentification: ReidentificationFlowServiceInterface,
  ) {
    super();
    this.backInterception = back.intercept(
      () => this.phone !== null,
      () => this.cancel(),
    );
  }

  dispose(): void {
    this.backInterception.dispose();
  }

  async action({ payload }: Parameters<ReidentificationConfirmControllerInterface['action']>[0]): Promise<void> {
    const phone = this.phone;

    if (phone === null) {
      throw new Exception('Re-identification confirmation is not initialized.');
    }

    if (payload === 'confirm') {
      await this.navigate.to(ReidentificationRoute, { replace: true });
      return;
    }

    await this.cancel();
  }

  async loader(): Promise<void> {
    const pending = this.reidentification.getPending();

    if (!pending) {
      throw new Exception('Re-identification flow is not initialized.');
    }

    this.phone = pending.phone;
  }

  private async cancel(): Promise<void> {
    const phone = this.phone;

    if (phone === null) {
      return;
    }

    this.reidentification.clear();
    await this.navigate.to(SignInRoute, {
      replace: true,
      state: { phone },
    });
  }
}
