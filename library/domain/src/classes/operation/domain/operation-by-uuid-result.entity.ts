import { Type } from 'class-transformer';
import { ValidateNested, IsBoolean } from 'class-validator';
import { MetaEntity } from '../../meta';
import { OperationEntity } from './operation.entity.ts';

export class OperationByUuidResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => OperationEntity)
  @ValidateNested()
  data: OperationEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
