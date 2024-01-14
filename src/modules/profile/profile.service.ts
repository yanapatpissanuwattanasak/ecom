import { Injectable } from '@nestjs/common';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {
    constructor( 
        private readonly profileRepository: ProfileRepository
    ){ }

    async getProfile(userId){
        console.log(userId);
        
        return this.profileRepository.getProfile(userId)
    }

    async createProfile(payload){
        return this.profileRepository.createProfile(payload)
    }
}
