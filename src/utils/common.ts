import { BadRequestException } from "@nestjs/common";
import * as jwt from 'jsonwebtoken';


export function paginationCal(page, limit) {
  if (page < 1 || limit < 1) {
    throw new BadRequestException('Invalid page or limit values. They must be non-negative integers.');
  }
  return { page: page - 1, pageLimit: page * limit }

}

export function generateToken(payload: any): string {
  return jwt.sign(payload, "test-jwt", { expiresIn: '1d' });
}

export function decodeJwtToken(token: string) {
  try {
    const decodedToken = jwt.verify(token, "test-jwt");
    return decodedToken;
  } catch (error) {
    // Handle any decoding errors here
    throw new Error('Invalid JWT token');
  }
}

// common.dto.ts
export class ApiResponse<T = any> {
  statusCode: number
  message?: string;
  data?: T;
  error?: string;

  constructor(statusCode: number, message: string, data?: T, error?: string) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.error = error;
  }
}

