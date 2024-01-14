import { EntityRepository, Repository } from 'typeorm';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from 'src/entitys/user.entity';
import { HttpCustomException } from 'src/utils/httpException';

@Injectable()
export class UserRepository {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<User>,
    ) { }

    async findByUsername(payload: any): Promise<User | null> {
        return this.userRepository.findOne({ where: { username: payload.username } });
    }

    async createAccount(payload: User): Promise<User | null> {
        const findUser = await this.userRepository.findOne({ where: { username: payload.username } });
        if (findUser) {
            throw new HttpCustomException(HttpStatus.BAD_REQUEST);
        }
        const user = new User(payload.username, payload.password, payload.email)
        return this.userRepository.save(user);
    }

    async update(id, paylaod) {
        return this.userRepository.update(id, paylaod)
    }   
}