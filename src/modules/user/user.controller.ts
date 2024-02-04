import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entitys/user.entity';
import { CreateUserDto } from './user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('/login')
  async login(@Body() createUserDto: any) {
    console.log(createUserDto);
    
    const token = await this.userService.Login(createUserDto);
    return {
      token: token
    }
  }

  @Post('/')

  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createAccount(createUserDto);
  }
}
