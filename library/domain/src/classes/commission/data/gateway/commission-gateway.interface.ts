import type { CommissionCalculateInput } from './input/commission-calculate.input.ts';

import { CommissionResultEntity } from '../../domain/commission-result.entity.ts';

export abstract class CommissionGatewayInterface {
  abstract calculate(data: CommissionCalculateInput): Promise<CommissionResultEntity>;
}
