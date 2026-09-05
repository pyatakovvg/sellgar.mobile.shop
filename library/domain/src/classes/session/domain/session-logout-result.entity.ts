import { IsBoolean } from 'class-validator';

export class SessionLogoutResultEntity {
  @IsBoolean()
  success: boolean;
}
