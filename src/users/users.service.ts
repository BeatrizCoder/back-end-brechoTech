import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { User } from '.prisma/client';
import { PrismaService } from '../prisma.service';
import * as bcypt from 'bcrypt';
import { CreateUserDto } from './users.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(private db: PrismaService) {}

  async createUser(data: CreateUserDto): Promise<User> {
    const existing = await this.db.user.findUnique({
      where: { email: data.email },
    });

    if (existing) {
      throw new ConflictException(
        'Este EMAIL já está cadastrado em nosso sistema',
      );
    }
    const hashedPassword = await bcypt.hash(data.password, 8);
    if (data.password != data.passwordConfirmation) {
    }
    const novodado = {
      nome: data.name,
      email: data.email,
      cpf: data.cpf,
      regiao: data.region,
      password: hashedPassword,
    };

    const user = await this.db.user.create({
      data: novodado,
    });
    return user;
  }

  async findUniqueUser(id: number): Promise<User> {
    const user = await this.db.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User nao foi encontrado');
    }
    return user;
  }

  async updateUser(id: number, data: CreateUserDto): Promise<User> {
    const user = await this.db.user.findUnique({
      where: { id: Number(id) },
    });

    if (!user) {
      throw new NotFoundException('Usuário nao foi encontrado');
    }

    return await this.db.user.update({
      where: { id: Number(id) },
      data,
    });
  }

  async deleteUser(id: number): Promise<User> {
    const userAuth = await this.db.user.findUnique({
      where: { id },
      select: {
        id: true,
      },
    });

    if (!userAuth) {
      throw new NotFoundException();
    }
    return this.db.user.delete({
      where: { id },
    });
  }

  async associarProduct(userId: number, productId: number): Promise<User> {
    await this.db.user.update({
      where: { id: userId },
      data: {
        products: {
          connect: {
            id: Number(productId),
          },
        },
      },
    });

    const userProd = await this.db.user.findUnique({
      where: { id: Number(userId) },
      include: {
        products: true,
      },
    });

    if (!userProd) {
      throw new NotFoundException('nao foi encontrado');
    }
    return userProd;
  }
}
