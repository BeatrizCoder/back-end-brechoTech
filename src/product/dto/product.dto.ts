import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'input',
    description: `product category`,
  })
  @IsString()
  typeHard: string;

  @ApiProperty({
    example: 'teclado',
    description: `product name`,
  })
  @IsString()
  modelHard: string;

  @ApiProperty({
    example: '$ 89.99',
    description: `product price`,
  })
  @IsString()
  priceHard: string;

  @ApiProperty({
    example: '1 year',
    description: `Product used time`,
  })
  @IsNumber()
  yearuseHard: number;

  @ApiProperty({
    example: 'image of product',
    description: `Register input hardware`,
  })
  @IsString()
  productPhotosHard: string;

  @ApiProperty({
    example: 'Video',
    description: `Video URL`,
  })
  @IsString()
  videoHard: string;

  @ApiProperty({
    example: 'second',
    description: `Informe if the product was already used`,
  })
  @IsString()
  usedHard: string;

  @ApiProperty({
    example: 'works normally',
    description: `Inform product description`,
  })
  @IsString()
  description;
}
