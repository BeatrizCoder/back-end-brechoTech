import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Patch,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from './users.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from 'src/users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import AuthUser from 'src/auth/auth-user.decorator';

@ApiTags('User')
@Controller('users')
export class userController {
  constructor(private service: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @UsePipes(ValidationPipe)
  @Get(':id')
  @ApiOperation({
    summary:
      'Description: This route gets the user by id.The user must be logged on the site.',
  })
  findUnique(@Param('id') id: number): Promise<User> {
    return this.service.findUniqueUser(Number(id));
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  @ApiOperation({ summary: 'Description: Route to create a user.' })
  async createUser(@Body() createUser: CreateUserDto): Promise<User> {
    return this.service.createUser(createUser);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('updateUser/:id')
  @ApiOperation({
    summary:
      'Description: Route to update a user.The user must be logged on the site.',
  })
  @UsePipes(ValidationPipe)
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUser: CreateUserDto,
  ): Promise<User> {
    return this.service.updateUser(id, updateUser);
  }

  @UseGuards(AuthGuard('jwt'))
  @UsePipes(ValidationPipe)
  @Delete('/delete/:id')
  @ApiOperation({
    summary:
      'Description: Route to delete a user.The user must be logged on the site.',
  })
  deleteUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.service.deleteUser(id);
  }

  @Get('cart/:id')
  @ApiOperation({
    summary:
      'Description:  This route allows the user to add products to the cart by id.',
  })
  @Post('cart/:id')
  @UseGuards(AuthGuard('jwt'))
  associarProduct(
    @AuthUser() user: User,
    @Param('id') productId: number,
  ): Promise<User> {
    const userId = user.id;
    return this.service.associarProduct(userId, productId);
  }
}
