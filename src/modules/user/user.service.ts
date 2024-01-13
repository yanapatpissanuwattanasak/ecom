import { HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from 'src/entitys/user.entity';
import { ExceptionMessage, HttpCustomException } from 'src/utils/httpException';
import { generateToken } from 'src/utils/common';
@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository) { }


  async findByUsername(payload) {
    return await this.userRepository.findByUsername(payload)
  }

  async Login(payload) {
    const user = await this.userRepository.findByUsername(payload)
    if (!user) throw new HttpCustomException(HttpStatus.NOT_FOUND, ExceptionMessage.USER_NOT_FOUND)
    console.log(user.checkPassword(payload.password));
    const checkPassword = await user.checkPassword(payload.password)
    if (!checkPassword) throw new HttpCustomException(HttpStatus.NOT_FOUND, ExceptionMessage.USER_OR_PASSWORD_WRONG)
    const jwt = generateToken({ username: user.getUsername() })
    return jwt
  }

  createAccount(payload) {
    return this.userRepository.createAccount(payload as User)
  }

}
