// auth.guard.ts

import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/modules/user/user.service';
import { decodeJwtToken } from 'src/utils/common';

@Injectable()
export class RoleGurard extends AuthGuard('jwt') {
  constructor(private readonly userService: UserService) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const { username } = request.body; // Assuming username and password are sent in the request body
      const token = request.headers.authorization;
      console.log(token);
      const jwtDecode = decodeJwtToken(token.replace("Bearer ", ""));
      console.log(jwtDecode['username']);

      const user = await this.userService.findByUsername({ username: jwtDecode['username'] });
      console.log(user);

      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }

      request.user = user;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }

  }
}
