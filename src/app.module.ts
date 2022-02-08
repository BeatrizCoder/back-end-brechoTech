import { Module } from '@nestjs/common';
import { CategoriasModule } from './categorias/categorias.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { ProductModule } from './product/product.module';

import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  // no imports chamamos o modulo de cada componente
  imports: [
    ProductModule,
    CategoriasModule,
    VendedorModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
