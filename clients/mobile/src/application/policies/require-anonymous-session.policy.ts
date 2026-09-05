import { Policy, RoutePolicyInterface, type PolicyResult, type RuntimeContextInterface } from '@sellgar/app';

@Policy()
export class RequireAnonymousSessionPolicy extends RoutePolicyInterface {
  execute(context: RuntimeContextInterface): PolicyResult {
    return context.session.phase === 'anonymous' ? { type: 'pass' } : { reason: context.session.phase, type: 'fail' };
  }
}
