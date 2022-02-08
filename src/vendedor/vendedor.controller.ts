import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Vendedor } from '@prisma/client';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { VendedorService } from './vendedor.service';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/role.decorator';
import { RolesGuard } from 'src/auth/role.guard';
import { UserRole } from 'src/users/user-roles-enum';

@ApiTags('Vendor')
@Controller('vendedor')
export class VendedorController {
  constructor(private service: VendedorService) {}

  @Post('register')
  @ApiOperation({
    summary:
      'Description: Route to allow the users to register themselves as vendor on the site',
  })
  createVendedor(@Body() data: CreateVendedorDto): Promise<Vendedor> {
    delete data.passwordConfirmation;
    return this.service.create(data);
  }

  @Role(UserRole.VENDOR)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('find/:id')
  findOne(@Param('id') id: string): Promise<Vendedor> {
    return this.service.findOne(id);
  }

  @Role(UserRole.VENDOR)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('find-all')
  @ApiOperation({
    summary:
      'Description: This route gets the vendor by id.The user must be logged on the site. Also the user needs to have a vendor register to be able to access this route.',
  })
  findMany() {
    return this.service.findMany();
  }

  @Role(UserRole.VENDOR)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete('delete/:id')
  @ApiOperation({
    summary:
      'Description: Route to delete vendor by id .The user must be logged on the site. Also the user needs to have a vendor register to be able to access this route.',
  })
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
