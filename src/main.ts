import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // podemos definir un prefijo que usara en el endpoint principal de la API:
  app.setGlobalPrefix('api-quinar/v1')

  // en este caso deberemos usar "https://serverejemplo.com/api-quinar/v1/ruta-ejemplo"

  await app.listen(3000); // aca va el puerto que usaremos para correr la API
}
bootstrap();
