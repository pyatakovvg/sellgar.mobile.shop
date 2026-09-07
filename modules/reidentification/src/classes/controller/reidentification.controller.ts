import { ReidentificationCompletionError, ReidentificationFlowServiceInterface } from '@library/domain';
import { SetSignInCodeRoute, SignInRoute } from '@library/route-tokens';
import {
  BackServiceInterface,
  type BackInterception,
  Controller,
  Exception,
  Inject,
  NavigateServiceInterface,
  UserRequestServiceInterface,
} from '@sellgar/app';

import {
  ReidentificationControllerInterface,
  type ReidentificationLoaderData,
} from './reidentification-controller.interface.ts';

@Controller()
export class ReidentificationController extends ReidentificationControllerInterface {
  private readonly backInterception: BackInterception;
  private phone: string | null = null;

  constructor(
    @Inject(BackServiceInterface)
    back: BackServiceInterface,
    @Inject(NavigateServiceInterface)
    private readonly navigate: NavigateServiceInterface,
    @Inject(ReidentificationFlowServiceInterface)
    private readonly reidentification: ReidentificationFlowServiceInterface,
    @Inject(UserRequestServiceInterface)
    private readonly userRequest: UserRequestServiceInterface,
  ) {
    super();
    this.backInterception = back.intercept(
      () => this.phone !== null,
      () => this.returnToSignIn(),
    );
  }

  dispose(): void {
    this.backInterception.dispose();
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
    const pending = this.reidentification.getPending();

    if (!pending) {
      throw new Exception('Re-identification flow is not initialized.');
    }

    this.phone = pending.phone;

    return {
      failureUrlPart: 'wallets/id/fail',
      source: { uri: pending.identification.identificationLink },
      successUrlPart: 'wallets/id/success',
    };
  }

  private async fail(title: string, description: string): Promise<void> {
    await this.userRequest.alert({ description, title });
    await this.returnToSignIn();
  }

  private async returnToSignIn(): Promise<void> {
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
