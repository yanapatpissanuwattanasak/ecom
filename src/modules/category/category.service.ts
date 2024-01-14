import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { ProductRepository } from '../product/product.repository';

@Injectable()
export class CategoryService {
    constructor(
        private readonly categoryRepository : CategoryRepository,
        private readonly productRepository : ProductRepository){}
    
    async findAllCate() {
        return this.categoryRepository.findAllCategory()
    }

    async createCategory(payload) {
        return this.categoryRepository.createCategory(payload)
    }

    async findCategory(payload) {
        return this.categoryRepository.findCategory(payload)
    }

    
}
