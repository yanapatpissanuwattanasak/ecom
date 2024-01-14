import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service'
import { paginationCal } from 'src/utils/common';
import { RoleGurard } from 'src/guards/auth.guard';
import { Product } from 'src/entitys/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get('/findAll')
  @UseGuards(RoleGurard)
  findAll(@Query('page', new ParseIntPipe()) page: number,
    @Query('pageLimit', new ParseIntPipe()) pageLimit: number): any {
    const calPagination = paginationCal(page, pageLimit)
    return this.productService.findAll(calPagination);
  }

  @Post('/')
  createProduct(@Body() payload: Product) {
    return this.productService.createProduct(payload);
  }

  @Get(':productId')
  findById(@Param('productId') productId: number) {
    console.log("asdasd");

    return this.productService.findById(productId);
  }

  @Get(':cateCode/cateCode')
  findProductByCate(@Param('cateCode') cateCode: string,
    @Query('page', new ParseIntPipe()) page: number,
    @Query('pageLimit', new ParseIntPipe()) pageLimit: number) {
    const calPagination = paginationCal(page, pageLimit)
    return this.productService.findProductByCate(cateCode, calPagination);
  }

}
