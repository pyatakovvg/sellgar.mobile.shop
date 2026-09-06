import { IsNotEmpty, IsString } from 'class-validator';

export class AuthBlockedRouteStateEntity {
  @IsNotEmpty()
  @IsString()
  title: string;
}
