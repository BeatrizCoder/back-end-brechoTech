import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User, Vendedor } from '.prisma/client';

export class LoginDto {
  @ApiProperty({
    example: 'pepe156@gmail.com',
    description: `The email registered will be the credentials  to login to the account.`,
  })
  @IsString()
  @Length(8, 30)
  email: string;

  @ApiProperty({
    example: '12345hj',
    description: `The password registered will be the credentials  to login tothe account.`,
  })
  @IsString()
  @Length(8, 14)
  password: string;
}

export class AuthResponse {
  token: string;
  user: User;
  vendedor: Vendedor;
}
