import { Like, Repository } from 'typeorm';
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

    async createProduct(payload) {
        return this.productsRepository.save(payload)
    }

    async findById(id): Promise<Product | null> {
        return this.productsRepository.findOne({ where : { id } });
    }

    async findProductByCatecode(cateCodeParent, pagination){
        const { page, pageLimit } = pagination
        return this.productsRepository.find({
            where: {
                category: Like(`%${cateCodeParent}%`)
            },
            skip: page,
            take: pageLimit
        })
    }
}