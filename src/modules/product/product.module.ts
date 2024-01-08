import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { DatabaseModule } from 'src/database/database.module';
import { productProviders } from 'src/utils/provider';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, ...productProviders],
  imports: [DatabaseModule],
})
export class ProductModule {}
