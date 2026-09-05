import type { CommissionCalculateInput } from '../data/gateway/input/commission-calculate.input.ts';

import { CommissionResultEntity } from '../domain/commission-result.entity.ts';

export abstract class CommissionServiceInterface {
  abstract calculate(data: CommissionCalculateInput): Promise<CommissionResultEntity>;
}
