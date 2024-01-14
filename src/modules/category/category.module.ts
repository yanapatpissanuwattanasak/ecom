import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { categoryProviders, productProviders } from 'src/utils/provider';
import { CategoryRepository } from './category.repository';
import { DatabaseModule } from 'src/database/database.module';
import { ProductService } from '../product/product.service';
import { ProductRepository } from '../product/product.repository';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository, ...categoryProviders, ProductService, ProductRepository, ...productProviders],
  imports: [DatabaseModule],
})
export class CategoryModule { }
