import { IsString, IsNumber } from 'class-validator';

export class PendingDetailsEntity {
  @IsNumber()
  attempt: number;

  @IsString()
  type: string;

  @IsString()
  identificationLink: string;
}
