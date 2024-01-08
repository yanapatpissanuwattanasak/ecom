import { BadRequestException } from "@nestjs/common";


export function paginationCal(page, limit) {
    if(page < 1 || limit < 1) {
        throw new BadRequestException('Invalid page or limit values. They must be non-negative integers.');
    }
    return { page: page - 1, pageLimit: page * limit}

}