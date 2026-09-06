import { AuthServiceInterface, type AuthStartEntity } from '@library/domain';
import { AuthOtpRoute, SignInRoute } from '@library/route-tokens';
import { Controller, Inject, NavigateServiceInterface, UserRequestServiceInterface } from '@sellgar/app';
import { uuid } from '@utils/generate';

import { CheckPhoneControllerInterface } from './check-phone-controller.interface.ts';

@Controller()
export class CheckPhoneController extends CheckPhoneControllerInterface {
  constructor(
    @Inject(AuthServiceInterface)
    private readonly authService: AuthServiceInterface,
    @Inject(NavigateServiceInterface)
    private readonly navigate: NavigateServiceInterface,
    @Inject(UserRequestServiceInterface)
    private readonly userRequest: UserRequestServiceInterface,
  ) {
    super();
  }

  async action({ payload }: Parameters<CheckPhoneControllerInterface['action']>[0]): Promise<void> {
    const requestUuid = uuid();
    let result: AuthStartEntity;

    try {
      result = await this.authService.startAuth({ phone: payload.phone, requestUuid });
    } catch {
      await this.userRequest.alert({
        description: 'Попробуйте повторить операцию позже',
        title: 'Что-то пошло не так',
      });
      return;
    }

    await this.navigateToNextRoute(result, payload.phone, requestUuid);
  }

  private navigateToNextRoute(result: AuthStartEntity, phone: string, requestUuid: string): Promise<void> {
    switch (result.nextAction) {
      case 'waitCredentials':
        return this.navigate.to(SignInRoute, {
          state: { phone },
        });

      case 'waitOtp':
        return this.navigate.to(AuthOtpRoute, {
          state: {
            phone,
            requestUuid,
            verification: result.verification,
          },
        });
    }
  }
}
