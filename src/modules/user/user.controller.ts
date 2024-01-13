import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entitys/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('/login')
  login(@Body() createUserDto: User) {
    return this.userService.Login(createUserDto);
  }

  @Post('/')
  createUser(@Body() createUserDto: User) {
    return this.userService.createAccount(createUserDto);
  }
}
