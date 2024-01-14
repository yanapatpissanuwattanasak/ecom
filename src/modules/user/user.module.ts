import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { profileProviders, userProviders } from 'src/utils/provider';
import { UserRepository } from './user.repository';
import { ProfileService } from '../profile/profile.service';
import { ProfileRepository } from '../profile/profile.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, ...userProviders, ProfileService, ProfileRepository, ...profileProviders],
  imports: [DatabaseModule],
  exports: [ProfileService, ProfileRepository, ...profileProviders]
})
export class UserModule {}
