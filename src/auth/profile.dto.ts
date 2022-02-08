import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsEmpty } from 'class-validator';

export class ProfileDto {
  @ApiProperty()
  @IsNumber()
  @IsEmpty()
  id: number;

  @ApiProperty()
  @IsString()
  @IsEmpty()
  role: string;
}
