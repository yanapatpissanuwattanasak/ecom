import { Repository } from 'typeorm';
import { Product } from 'src/entitys/product.entity';
import { Pagination } from './product.dto';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
    constructor(
        @Inject('PRODUCT_REPOSITORY')
        private readonly productsRepository: Repository<Product>,
    ) { }
    async findAll(pagination: Pagination): Promise<Product[]> {
        const { page, pageLimit } = pagination
        return this.productsRepository.find({
            skip: page,
            take: pageLimit
        });
    }
}