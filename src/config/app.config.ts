import { join } from 'path';

export const appConfig = {
  staticAssets: {
    directory: join(__dirname, '..', '..', 'public'),
  },
  views: {
    directory: join(__dirname, '..', '..', 'views'),
    engine: 'hbs',
  },
  server: {
    port: process.env.PORT || 3000,
  },
};