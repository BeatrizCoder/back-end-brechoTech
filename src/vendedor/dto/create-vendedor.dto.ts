import { ApiProperty } from '@nestjs/swagger';

export class CreateVendedorDto {
  @ApiProperty({
    example: 'Maria',
    description: `Register the vendor  name`,
  })
  name: string;

  @ApiProperty({
    example: 'maria_luiza@gmail.com',
    description: `register the vendor email`,
  })
  email: string;

  @ApiProperty({
    example: '123456ml',
    description: `register a password `,
  })
  password: string;

  @ApiProperty({
    example: '123456ml',
    description: `Confirm the password `,
  })
  passwordConfirmation: string;

  @ApiProperty({
    example: '123456789',
    description: `Register the vendor CPF`,
  })
  cpf: string;

  @ApiProperty({
    example: 'Rio de janeiro',
    description: `Register the vendor region`,
  })
  region: string;
}
