import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
@Injectable()
export class UserService {
  constructor(
    private readonly userRepository : UserRepository){}


  findByUsername(payload) {
    return this.userRepository.findByUsername(payload)
  }

}
