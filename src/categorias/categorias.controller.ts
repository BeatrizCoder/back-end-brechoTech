import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateCategoriasDto } from './dto/create-categorias.dto';
import { CategoriasService } from './categorias.service';
import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { Categorias } from '@prisma/client';

@ApiTags('Category')
@Controller('categorias')
export class CategoriasController {
  constructor(private service: CategoriasService) {}

  @Post('category')
  CreateCategoria(@Body() data: CreateCategoriasDto): Promise<Categorias> {
    return this.service.create(data);
  }

  @Get('find')
  findMany(): Promise<Categorias[]> {
    return this.service.findyMany();
  }

  @Get('find/:id')
  findUnique(@Param('id') id: string): Promise<Categorias> {
    return this.service.findUnique(id);
  }

  @Get('/input')
  @ApiOperation({ summary: 'Search all products from the input category' })
  findCategory() {
    return this.service.findCategory();
  }

  @Get('/output')
  @ApiOperation({
    summary:
      'Description: This route searches all products from the output category.',
  })
  findOutput() {
    return this.service.findOutput();
  }

  @Get('/processing')
  @ApiOperation({
    summary:
      'Description:This route searches all products from the processing category.',
  })
  findProcessing() {
    return this.service.findProcessing();
  }

  @Get('/storage')
  @ApiOperation({
    summary:
      'Description:This route searches all products from the storage category.',
  })
  findStorage() {
    return this.service.findStorage();
  }

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
