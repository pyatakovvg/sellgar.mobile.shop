import { Type } from 'class-transformer';
import { IsBoolean, ValidateNested } from 'class-validator';
import { MetaEntity } from '../../meta';
import { LoginTokensEntity } from './login-tokens.entity.ts';
import { LoginPendingIdentificationEntity } from './login-pending-identification.entity.ts';
import { LoginWithIdentificationEntity } from './login-with-identification.entity.ts';

export class LoginWithIdentificationResultEntity {
  @Type(() => LoginTokensEntity, {
    discriminator: {
      property: 'nextAction',
      subTypes: [
        { name: 'Tokens', value: LoginTokensEntity },
        { name: 'PendingIdentification', value: LoginPendingIdentificationEntity },
      ],
    },
    keepDiscriminatorProperty: true,
  })
  @ValidateNested()
  data: LoginWithIdentificationEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;

  @IsBoolean()
  success: boolean;
}
