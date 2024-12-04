import { Controller, Get, Param, ParseIntPipe, Render } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Render('users/index')
  getAllUsers() {
    return {
      title: 'Users List',
      users: this.usersService.findAll(),
    };
  }

  @Get(':id')
  @Render('users/detail')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return {
      title: 'User Detail',
      user: this.usersService.findOne(id),
    };
  }
}