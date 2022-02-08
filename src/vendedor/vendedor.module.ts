import { Module } from '@nestjs/common';
import { VendedorService } from './vendedor.service';
import { VendedorController } from './vendedor.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [VendedorService, PrismaService],
  controllers: [VendedorController],
})
export class VendedorModule {}
