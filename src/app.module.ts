import { Module } from '@nestjs/common';
import { ProductController } from './modules/product/product.controller';
import { ProductModule } from './modules/product/product.module';
import { ProductService } from './modules/product/product.service';
import { databaseProviders } from './database/database.provider';
import { ProductRepository } from './modules/product/product.repository';
import { productProviders, userProviders } from './utils/provider';
import { UserModule } from './modules/user/user.module';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
import { UserRepository } from './modules/user/user.repository';

const AllService = [
  ProductService,
  UserService
]

const AllRepository = [
  ProductRepository,
  UserRepository
]

const AllProvider = [
  ...productProviders,
  ...databaseProviders,
  ...userProviders
]

@Module({
  imports: [ProductModule, UserModule],
  controllers: [ProductController, UserController],
  providers: [...AllService, ...AllRepository, ...AllProvider ],
})
export class AppModule {}
