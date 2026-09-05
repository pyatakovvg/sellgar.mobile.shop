import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { ChallengePendingRedirectParams } from './challenge-pending-redirect-params.ts';

export class Operation3DSActions {
  @IsString()
  url: string;
  @IsString()
  method: string;
  @Type(() => ChallengePendingRedirectParams)
  params: ChallengePendingRedirectParams;
}
