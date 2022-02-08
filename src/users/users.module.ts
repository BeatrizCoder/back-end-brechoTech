import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from './users.service';
import { userController } from './users.controller';

@Module({
  providers: [UserService, PrismaService],
  controllers: [userController],
})
export class UserModule {}
