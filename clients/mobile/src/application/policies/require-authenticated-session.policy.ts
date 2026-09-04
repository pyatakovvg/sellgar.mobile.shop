import { Policy, RoutePolicyInterface, type PolicyResult, type RuntimeContextInterface } from '@sellgar/app';

@Policy()
export class RequireAuthenticatedSessionPolicy extends RoutePolicyInterface {
  execute(context: RuntimeContextInterface): PolicyResult {
    return context.session.phase === 'authenticated' ? { type: 'pass' } : { reason: 'anonymous', type: 'fail' };
  }
}
