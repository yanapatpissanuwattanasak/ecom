import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { RoleGurard } from 'src/guards/auth.guard';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('/')
  @UseGuards(RoleGurard)
  async getProfile(@Req() req){
    console.log(req.userId);
    
    return this.profileService.getProfile(await req.userId)
  }

  @Post('/')
  async createProfile(@Body() body){
    return this.profileService.createProfile(body)
  }

}
