import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { BinCheckResultDataEntity } from './bin-check-result-data.entity.ts';

export class BinCheckEntity {
  @Type(() => BinCheckResultDataEntity)
  @ValidateNested()
  binCheckResult: BinCheckResultDataEntity;
}
