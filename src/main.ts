/**
 * The above TypeScript code initializes a NestJS application by creating an
 * instance of AppModule and listening on port 3000.
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
