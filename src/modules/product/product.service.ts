import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { Pagination } from './product.dto';
import { CategoryRepository } from '../category/category.repository';

@Injectable()
export class ProductService {
    constructor(
        private readonly productRepository : ProductRepository,
        private readonly categoryRepository : CategoryRepository
        ){}
        

    async findAll(page: Pagination) {
        return this.productRepository.findAll(page)
    }

    async createProduct(payload){
        return this.productRepository.createProduct(payload)
    }

    async findById(id: number){
        let product = await this.productRepository.findById(id)
        const cate = await this.categoryRepository.findCategory(product.category)
        return Object.assign(product,{ categoryList: cate.cateParent})
    }

    async findProductByCate(cateCode, calPagination) {
        const category = await this.categoryRepository.findCategory(cateCode)
        const product = await this.productRepository.findProductByCatecode(category.cateCodeParent, calPagination)
        return {
            category,
            product
        }
    }
}
