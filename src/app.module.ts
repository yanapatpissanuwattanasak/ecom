import { Module } from '@nestjs/common';
import { ProductController } from './modules/product/product.controller';
import { ProductModule } from './modules/product/product.module';
import { ProductService } from './modules/product/product.service';
import { databaseProviders } from './database/database.provider';
import { ProductRepository } from './modules/product/product.repository';
import { categoryProviders, productProviders, profileProviders, userProviders } from './utils/provider';
import { UserModule } from './modules/user/user.module';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
import { UserRepository } from './modules/user/user.repository';

import { CategoryController } from './modules/category/category.controller';
import { CategoryRepository } from './modules/category/category.repository';
import { CategoryService } from './modules/category/category.service';
import { CategoryModule } from './modules/category/category.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ProfileService } from './modules/profile/profile.service';
import { ProfileRepository } from './modules/profile/profile.repository';

const AllService = [
  ProductService,
  UserService,
  CategoryService,
  ProfileService
]

const AllRepository = [
  ProductRepository,
  UserRepository,
  CategoryRepository,
  ProfileRepository
]

const AllProvider = [
  ...productProviders,
  ...databaseProviders,
  ...userProviders,
  ...categoryProviders,
  ...profileProviders
]

@Module({
  imports: [ProductModule, UserModule, CategoryModule, ProfileModule],
  controllers: [ProductController, UserController, CategoryController],
  providers: [...AllService, ...AllRepository, ...AllProvider],
})
export class AppModule { }
