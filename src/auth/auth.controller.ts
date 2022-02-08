import { Controller, Post, Body } from '@nestjs/common';
import AuthUser from './auth-user.decorator';
import { AuthService } from './auth.service';
import { LoginDto, AuthResponse } from './login.dto';
import { User } from '@prisma/client';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProfileDto } from './profile.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Description: This route will allow the user ' })
  LoginDto(@Body() data: LoginDto) {
    return this.service.login(data);
  }

  @Post('profile')
  @ApiOperation({
    summary: 'Description: Route to take the user to the profile on the site.',
  })
  profile(@Body() data: ProfileDto) {
    return this.service.profile(data);
  }
}
