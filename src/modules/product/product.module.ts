import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { DatabaseModule } from 'src/database/database.module';
import { categoryProviders, productProviders, userProviders } from 'src/utils/provider';
import { CategoryService } from '../category/category.service';
import { CategoryRepository } from '../category/category.repository';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { UserModule } from '../user/user.module';
@Module({
  controllers: [ProductController],
  providers: [ProductService, CategoryService, CategoryRepository, ...categoryProviders, ProductRepository, ...productProviders, UserService, UserRepository, ...userProviders],
  imports: [DatabaseModule, UserModule],
})
export class ProductModule {}
