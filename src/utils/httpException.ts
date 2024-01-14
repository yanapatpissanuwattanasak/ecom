import { HttpException, HttpStatus } from "@nestjs/common";

export function setType(status) {
  if (status === HttpStatus.FORBIDDEN) return "Forbidden"
  if (status === HttpStatus.BAD_REQUEST) return "BadRequest"
}

export class HttpCustomException extends HttpException {
 
  constructor(status, message?, response?) {

    message = message || setType(status)
    super(message, status, response);
  }
  
}


export enum ExceptionMessage {
  USER_NOT_FOUND = 'User not Found',
  USER_OR_PASSWORD_WRONG = 'Username or Password is wrong!!!'
}