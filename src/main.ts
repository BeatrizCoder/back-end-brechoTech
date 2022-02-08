import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Api Brecho Tech')
    .setDescription(
      'This project represents a marketplace and it works as a thrift shop. The vendors offer second hand hardware and the buyers will be able to find hardware at affordable prices. This software was built to become a solution in the hardware market related to a computer component problem. Due to this lack of hardware on the market, the price of new products has become increasingly inaccessible to the majority of the Brazilian population that is interested in getting this type of product.This SPA consumes an API through AXIOS applying the following technologies : Nodejs, ReactApp ,Prisma and SQL as a database.',
    )
    .setVersion('1.0')
    .addTag('Vendor')
    .addTag('Product')
    .addTag('Category')
    .addTag('User')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
