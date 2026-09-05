import { Type } from 'class-transformer';
import { IsIn, ValidateNested } from 'class-validator';
import { AuthEntity } from './auth.entity.ts';

export class LoginTokensEntity {
  @IsIn(['Tokens'])
  nextAction: 'Tokens';

  @Type(() => AuthEntity)
  @ValidateNested()
  data: AuthEntity;
}
