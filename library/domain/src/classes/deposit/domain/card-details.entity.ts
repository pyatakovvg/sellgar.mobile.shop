import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CardDetailsEntity {
  @IsString()
  pan: string;

  @IsString()
  cvc: string;

  @IsString()
  expMonth: string;

  @IsString()
  expYear: string;

  @IsString()
  @IsOptional()
  cardHolder: string | null;

  @IsBoolean()
  @IsOptional()
  createToken: boolean;
}
