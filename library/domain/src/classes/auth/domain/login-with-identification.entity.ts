import { LoginTokensEntity } from './login-tokens.entity.ts';
import { LoginPendingIdentificationEntity } from './login-pending-identification.entity.ts';

export type LoginWithIdentificationEntity = LoginTokensEntity | LoginPendingIdentificationEntity;
