import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);
  const port = config.get<number>('API_PORT');

  const swagger = new DocumentBuilder()
    .setTitle('News API')
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .addTag('CRUD Operations')
    .build();

  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(port || 3000, () => {
    console.log(`App started on port: ${port}`);
  });
}

bootstrap();
