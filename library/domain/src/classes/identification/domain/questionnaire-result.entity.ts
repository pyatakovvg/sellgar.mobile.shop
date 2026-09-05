import { IsBoolean, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { QuestionnaireEntity } from './questionnaire.entity.ts';

export class QuestionnaireResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => QuestionnaireEntity)
  @ValidateNested()
  data: QuestionnaireEntity;

  @IsString()
  @IsOptional()
  error?: string;
}
