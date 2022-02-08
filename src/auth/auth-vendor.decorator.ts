import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Vendedor } from '@prisma/client';

const AuthVendor = createParamDecorator((_, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  const vendor = request.user as Vendedor;
  delete vendor.password;
  return vendor;
});

export default AuthVendor;
