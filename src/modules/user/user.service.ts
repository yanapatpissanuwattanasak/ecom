import { HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from 'src/entitys/user.entity';
import { ExceptionMessage, HttpCustomException } from 'src/utils/httpException';
import { generateToken } from 'src/utils/common';
import { ProfileRepository } from '../profile/profile.repository';
@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly profileRepository: ProfileRepository) { }


  async findByUsername(payload) {
    return this.userRepository.findByUsername(payload)
  }

  async Login(payload) {
    const user = await this.userRepository.findByUsername(payload)
    if (!user) throw new HttpCustomException(HttpStatus.NOT_FOUND, ExceptionMessage.USER_NOT_FOUND)
    const checkPassword = await user.checkPassword(payload.password)
    if (!checkPassword) throw new HttpCustomException(HttpStatus.NOT_FOUND, ExceptionMessage.USER_OR_PASSWORD_WRONG, null)
    const jwt = generateToken({ userId: await user.getId(), username: await user.getUsername() })
    return jwt
  }

  async createAccount(payload) {
    const payloadUser = {
      username: payload.username,
      password: payload.password,
      email: payload.email
    }
    const user = await this.userRepository.createAccount(payloadUser as User)
    const paylaodProfile = {
      userId: user.id,
      firstname: payload.firstname,
      lastname: payload.lastname
    }
    return this.profileRepository.createProfile(paylaodProfile)
  }

}
