import { Catch, HttpException } from '@nestjs/common';
import { ApiResponse } from 'src/utils/common';

@Catch(HttpException)
export class HttpExceptionFilter {
  catch(exception, host) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    response
      .status(status)
      .json(new ApiResponse(status, exception.getResponse(), exception.options));

      
  }

  
}