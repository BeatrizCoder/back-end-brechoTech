import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/product.dto';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/role.decorator';
import { RolesGuard } from 'src/auth/role.guard';
import { UserRole } from 'src/users/user-roles-enum';
import AuthVendor from 'src/auth/auth-vendor.decorator';
import { Vendedor } from '@prisma/client';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Role(UserRole.VENDOR)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('create')
  @ApiOperation({
    summary:
      'Description: Route to create a product. To access this route the user must be logged on the site. Also the user needs to have a vendor register to be able to access this route.',
  })
  create(
    @Body() createProductDto: CreateProductDto,
    @AuthVendor() vendor: Vendedor,
  ) {
    const vendorId = vendor.id;
    return this.productService.create(createProductDto, vendorId);
  }

  @Get('/')
  @ApiOperation({ summary: 'Description: Get all products' })
  findAll() {
    return this.productService.findAll();
  }

  @Get('find/:id')
  @ApiOperation({ summary: 'Description: Get a product by id ' })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Role(UserRole.VENDOR)
  @Put('update/:id')
  @ApiOperation({
    summary:
      'Description: Route to update a product. To access this route the user must be logged on the site. Also the user needs to have a vendor register to be able to access this route.',
  })
  update(@Param('id') id: string, @Body() updateProductDto: CreateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Role(UserRole.VENDOR)
  @Delete('delete/:id')
  @ApiOperation({
    summary:
      'Description: Route to delete a product. To access this route the user must be logged on the site. Also the user needs to have a vendor register to be able to access this route.',
  })
  remove(@Param('id') id: number) {
    return this.productService.remove(+id);
  }
}
