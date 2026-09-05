import { IsString } from 'class-validator';

export class PayMethodAppearanceEntity {
  @IsString()
  iconUrl: string;
}
