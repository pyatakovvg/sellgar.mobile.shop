import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';

import { QuestionnaireEntity } from './questionnaire.entity.ts';

export class IdentificationRequestEntity {
  @IsString()
  requestUuid: string;

  @Type(() => QuestionnaireEntity)
  @ValidateNested()
  questionnaire: QuestionnaireEntity;
}
