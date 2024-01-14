import { Inject, Injectable } from '@nestjs/common';
import { Profile } from 'src/entitys/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileRepository {
    constructor(
        @Inject('PROFILE_REPOSITORY')
        private readonly profileRepository: Repository<Profile>,
    ) { }

    async createProfile(paylaod){
        return this.profileRepository.save(paylaod)
    }

    async getProfile(userId){
        return this.profileRepository.findOne({ where: {userId: userId} })
    }
}