import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from 'src/entitys/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get()
  findAll(): any {
    return this.categoryService.findAllCate()
  }

  @Post('/')
  createUser(@Body() payload: Category) {
    return this.categoryService.createCategory(payload);
  }

  @Get(':cateCode')
  findCategory(@Param('cateCode') cateCode: string) {
    return this.categoryService.findCategory(cateCode)
  }
}
