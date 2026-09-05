import type { OperationLimitsInput } from '../data/gateway/input/operation-limits.input.ts';

import { OperationLimitsAvailableResultEntity } from '../domain/operation-limits-available-result.entity.ts';

export abstract class OperationLimitsServiceInterface {
  abstract getLimits(params: OperationLimitsInput): Promise<OperationLimitsAvailableResultEntity>;
}
