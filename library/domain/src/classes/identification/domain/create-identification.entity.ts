import { IsString } from 'class-validator';

export class CreateIdentificationEntity {
  @IsString()
  uuid: string;
}
