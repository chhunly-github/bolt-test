import { NestExpressApplication } from '@nestjs/platform-express';
import { appConfig } from '../config';

export function setupViewEngine(app: NestExpressApplication): void {
  app.useStaticAssets(appConfig.staticAssets.directory);
  app.setBaseViewsDir(appConfig.views.directory);
  app.setViewEngine(appConfig.views.engine);
}