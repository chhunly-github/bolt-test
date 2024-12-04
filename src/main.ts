import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { setupViewEngine } from './bootstrap';
import { appConfig } from './config';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    
    // Setup view engine and static assets
    setupViewEngine(app);
    
    // Start the server
    await app.listen(appConfig.server.port);
    
    console.log(`Application is running on: http://localhost:${appConfig.server.port}`);
  } catch (error) {
    console.error('Error starting the application:', error);
    process.exit(1);
  }
}

bootstrap();