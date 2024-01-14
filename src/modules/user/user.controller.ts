import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entitys/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('/login')
  async login(@Body() createUserDto: User) {
    const token = await this.userService.Login(createUserDto);
    return {
      token: token
    }
  }

  @Post('/')
  createUser(@Body() createUserDto: User) {
    return this.userService.createAccount(createUserDto);
  }
}
