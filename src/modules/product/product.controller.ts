import { Controller, Get, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service'
import { paginationCal } from 'src/utils/common';
import { RolesGuard } from 'src/guards/auth.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }
  @Get('/findAll')
  @UseGuards(RolesGuard)
  findAll(@Query('page', new ParseIntPipe()) page: number,
    @Query('pageLimit', new ParseIntPipe()) pageLimit: number): any {
    const calPagination = paginationCal(page, pageLimit)
    return this.productService.findAll(calPagination);
  }
}
