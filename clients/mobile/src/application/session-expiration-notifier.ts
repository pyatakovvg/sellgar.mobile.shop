import {
  Inject,
  Injectable,
  SessionExpirationNotifierInterface,
  type SessionExpirationNotificationContext,
  UserRequestServiceInterface,
} from '@sellgar/app';

@Injectable()
export class SessionExpirationNotifier extends SessionExpirationNotifierInterface {
  constructor(
    @Inject(UserRequestServiceInterface)
    private readonly userRequest: UserRequestServiceInterface,
  ) {
    super();
  }

  async notify(context: SessionExpirationNotificationContext): Promise<void> {
    if (context.signal.aborted) return;

    await this.userRequest.alert({
      applyText: 'Ок',
      description: 'Срок действия авторизации истёк. Выполните вход снова.',
      title: 'Сессия завершена',
    });
  }
}
