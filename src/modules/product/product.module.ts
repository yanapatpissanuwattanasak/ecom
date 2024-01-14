import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { DatabaseModule } from 'src/database/database.module';
import { categoryProviders, productProviders } from 'src/utils/provider';
import { CategoryService } from '../category/category.service';
import { CategoryRepository } from '../category/category.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, CategoryService, CategoryRepository, ...categoryProviders, ProductRepository, ...productProviders],
  imports: [DatabaseModule],
})
export class ProductModule {}
