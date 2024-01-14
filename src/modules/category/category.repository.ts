import { Repository } from 'typeorm';
import { Product } from 'src/entitys/product.entity';
import { Inject, Injectable } from '@nestjs/common';
import { Category } from 'src/entitys/category.entity';

@Injectable()
export class CategoryRepository {
    constructor(
        @Inject('CATEGORY_REPOSITORY')
        private readonly categoryRepository: Repository<Category>,
        @Inject('PRODUCT_REPOSITORY')
        private readonly productRepository: Repository<Product>,
    ) { }
    async findAllCategory() {
        return this.categoryRepository.find({
            order: {
                cateLevel: 'ASC',
                id: 'ASC'
            },
        })
    }

    async findCategory(cateCodeParent): Promise<any> {
        let category = await this.categoryRepository.findOne({
            where: {
                cateCodeParent: cateCodeParent,
            },
        })
        if (category.cateCodeParent) {
            const cateString = category['cateCodeParent']
            const allCate = cateString.split('-')
            const cate2 = await this.categoryRepository.createQueryBuilder('category')
                .where('category.cateCode IN (:...allCate)', { allCate })
                .orderBy('category.cateLevel', 'ASC')
                .orderBy('category.id', 'ASC')
                .getMany();
            const tranfromCate = { cateParent: cate2 }
            Object.assign(category, tranfromCate);
        }
        return category
    }

    async createCategory(payload) {
        return this.categoryRepository.save(payload)
    }


}