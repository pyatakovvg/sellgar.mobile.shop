import { SessionUnlockUsecaseInterface } from '@library/domain';
import { Inject, Policy, RoutePolicyInterface, type PolicyResult } from '@sellgar/app';

@Policy()
export class RequireStoredSessionPolicy extends RoutePolicyInterface {
  constructor(
    @Inject(SessionUnlockUsecaseInterface)
    private readonly sessionUnlock: SessionUnlockUsecaseInterface,
  ) {
    super();
  }

  execute(): PolicyResult {
    return this.sessionUnlock.available() ? { type: 'pass' } : { reason: 'stored-session-missing', type: 'fail' };
  }
}
