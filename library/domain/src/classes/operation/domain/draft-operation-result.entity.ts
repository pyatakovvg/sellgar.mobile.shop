import { IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MetaEntity } from '../../meta';
import { DraftOperationEntity } from './draft-operation.entity.ts';

export class DraftOperationResultEntity {
  @IsBoolean()
  success: boolean;

  @ValidateNested()
  @Type(() => DraftOperationEntity)
  data: DraftOperationEntity;

  @ValidateNested()
  @Type(() => MetaEntity)
  meta: MetaEntity;
}
