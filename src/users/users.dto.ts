import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Maria',
    description: `Register the user name`,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Maria123@gmail.com',
    description: `Register the user email`,
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'ls12345',
    description: `register the user password`,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'ls12345',
    description: `Confirm the user password `,
  })
  @IsString()
  @IsNotEmpty()
  passwordConfirmation: string;

  @ApiProperty({
    example: '123456789',
    description: `Register the user CPF`,
  })
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty({
    example: 'Belo Horizonte',
    description: `Register the user region`,
  })
  @IsString()
  @IsNotEmpty()
  region: string;
}
