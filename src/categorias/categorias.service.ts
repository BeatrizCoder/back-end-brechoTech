import { PrismaService } from 'src/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Categorias, Prisma } from '@prisma/client';

@Injectable()
export class CategoriasService {
  constructor(private database: PrismaService) {}

  async create(data: Prisma.CategoriasCreateInput): Promise<Categorias> {
    const categoria = await this.database.categorias.create({ data });
    return categoria;
  }

  async findyMany(): Promise<Categorias[]> {
    const categorias = await this.database.categorias.findMany();
    return categorias;
  }

  async findUnique(id: string): Promise<Categorias> {
    const categoria = await this.database.categorias.findUnique({
      where: { id },
    });

    if (!categoria) {
      throw new NotFoundException('Id não encontrado na base de dados');
    }
    return categoria;
  }

  async findCategory() {
    const producToCategory = await this.database.categorias.findMany({
      where: {
        hardwerEntrada: true,
      },
      include: {
        products: {
          include: {
            Vendedor: true,
          },
        },
      },
    });
    return producToCategory;
  }

  async findOutput() {
    const producToCategory = await this.database.categorias.findMany({
      where: {
        hardwerSaida: true,
      },
      include: {
        products: {
          include: {
            Vendedor: true,
          },
        },
      },
    });
    return producToCategory;
  }

  async findProcessing() {
    const producToCategory = await this.database.categorias.findMany({
      where: {
        hardwerProcessamento: true,
      },
      include: {
        products: {
          include: {
            Vendedor: true,
          },
        },
      },
    });
    return producToCategory;
  }

  async findStorage() {
    const producToCategory = await this.database.categorias.findMany({
      where: {
        hardwerArmazenamento: true,
      },
      include: {
        products: {
          include: {
            Vendedor: true,
          },
        },
      },
    });
    return producToCategory;
  }

  async deleteOne(id: string): Promise<{ message: string }> {
    await this.database.categorias.delete({
      where: { id },
    });

    return {
      message: 'Item apagado',
    };
  }
}
