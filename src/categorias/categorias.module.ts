import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CategoriasController],
  providers: [CategoriasService, PrismaService],
})
export class CategoriasModule {}
