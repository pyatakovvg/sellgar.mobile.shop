import { IsString, Matches } from 'class-validator';

export class SignInRouteStateEntity {
  @IsString()
  @Matches(/^77\d{9}$/)
  phone: string;
}
