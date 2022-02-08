import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriasDto {
  @ApiProperty({
    example: 'input',
    description: `Register input hardware`,
  })
  hardwerEntrada?: boolean;

  @ApiProperty({
    example: 'output',
    description: `Register output hardware`,
  })
  hardwerSaida?: boolean;

  @ApiProperty({
    example: 'Processing',
    description: `Register Processing hardware`,
  })
  hardwerProcessamento?: boolean;

  @ApiProperty({
    example: 'storage',
    description: `Register storage hardware`,
  })
  hardwerArmazenamento?: boolean;
}
