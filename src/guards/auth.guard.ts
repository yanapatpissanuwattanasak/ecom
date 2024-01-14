// auth.guard.ts

import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/modules/user/user.service';
import { decodeJwtToken } from 'src/utils/common';

@Injectable()
export class RoleGurard implements CanActivate {
  constructor(private readonly userService: UserService) {

  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const token = request.headers.authorization;
      const jwtDecode = decodeJwtToken(token.replace("Bearer ", ""));
      const user = await this.userService.findByUsername({ username: jwtDecode['username'] });
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      request.userId = user.getId();
      return true;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException('Invalid credentials');
    }

  }
}
