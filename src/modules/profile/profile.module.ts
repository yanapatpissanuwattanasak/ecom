import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { ProfileRepository } from './profile.repository';
import { profileProviders, userProviders } from 'src/utils/provider';
import { DatabaseModule } from 'src/database/database.module';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, ProfileRepository, ...profileProviders, UserService, UserRepository, ...userProviders],
  imports: [DatabaseModule],
})
export class ProfileModule {}
