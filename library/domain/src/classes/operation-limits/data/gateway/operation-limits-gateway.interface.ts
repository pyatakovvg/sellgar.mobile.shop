import type { OperationLimitsInput } from './input/operation-limits.input.ts';

import { OperationLimitsResultEntity } from '../../domain/operation-limits-result.entity.ts';

export abstract class OperationLimitsGatewayInterface {
  abstract getLimits(params: OperationLimitsInput): Promise<OperationLimitsResultEntity>;
}
