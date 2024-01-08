import { EntityRepository, Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/entitys/user.entity';

@Injectable()
@EntityRepository(User)
export class UserRepository {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<User>,
      ) {}
    async findByUsername(payload: any): Promise<User | null> {
        return this.userRepository.findOne({ where: { username: payload.username } });
    }
}