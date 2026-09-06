import { ReidentificationCompletionError, ReidentificationFlowServiceInterface } from '@library/domain';
import { SetSignInCodeRoute } from '@library/route-tokens';
import { Controller, Exception, Inject, NavigateServiceInterface, UserRequestServiceInterface } from '@sellgar/app';

import {
  ReidentificationControllerInterface,
  type ReidentificationLoaderData,
} from './reidentification-controller.interface.ts';

@Controller()
export class ReidentificationController extends ReidentificationControllerInterface {
  constructor(
    @Inject(NavigateServiceInterface)
    private readonly navigate: NavigateServiceInterface,
    @Inject(ReidentificationFlowServiceInterface)
    private readonly reidentification: ReidentificationFlowServiceInterface,
    @Inject(UserRequestServiceInterface)
    private readonly userRequest: UserRequestServiceInterface,
  ) {
    super();
  }

  async action({ payload }: Parameters<ReidentificationControllerInterface['action']>[0]): Promise<void> {
    if (payload === 'failure') {
      await this.fail('Не удалось подтвердить устройство', 'Попробуйте пройти идентификацию ещё раз');
      return;
    }

    try {
      await this.reidentification.complete();
    } catch (error) {
      if (error instanceof ReidentificationCompletionError && error.phase === 'sign-in') {
        await this.fail('Не удалось войти автоматически', 'Попробуйте войти ещё раз');
      } else {
        await this.fail('Не удалось подтвердить устройство', 'Попробуйте пройти идентификацию ещё раз');
      }
      return;
    }

    await this.navigate.to(SetSignInCodeRoute, { replace: true });
  }

  cancel(): void {
    this.reidentification.clear();
  }

  async loader(): Promise<ReidentificationLoaderData> {
    const pending = this.reidentification.getPendingIdentification();

    if (!pending) {
      throw new Exception('Re-identification flow is not initialized.');
    }

    return {
      failureUrlPart: 'wallets/id/fail',
      source: { uri: pending.identificationLink },
      successUrlPart: 'wallets/id/success',
    };
  }

  private async fail(title: string, description: string): Promise<void> {
    this.reidentification.clear();
    await this.userRequest.alert({ description, title });
    await this.navigate.back();
  }
}
