import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { Pagination } from './product.dto';

@Injectable()
export class ProductService {
    constructor(
        private readonly productRepository : ProductRepository){}
    findAll(page: Pagination) {
        return this.productRepository.findAll(page)
    }
}
