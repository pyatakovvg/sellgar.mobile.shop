import { IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MetaEntity } from '../../meta';
import { PayCategoryEntity } from './pay-category.entity.ts';

export class PayCategoryResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => PayCategoryEntity)
  @ValidateNested()
  data: PayCategoryEntity[];

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
