import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //request from client
  @Post('register')
  register(@Req() request: Request, @Body() body: AuthDTO) {
    console.log(body);
    return this.authService.register(body);
  }
  @Post('login')
  login() {
    return this.authService.login();
  }
}
