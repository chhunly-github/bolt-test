import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { 
      message: this.appService.getHello(),
      title: 'Welcome to NestJS with Handlebars' 
    };
  }
}