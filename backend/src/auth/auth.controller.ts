import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { LocalGuard } from '../guards/local.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private usersService: UsersService) {
  }
  @UseGuards(LocalGuard)
  @Post('login')
  login(@Req() req) {
    /* Генерируем для пользователя JWT-токен */
    return this.authService.auth(req.user);
  }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    /* При регистрации создаём пользователя и генерируем для него токен */
    const user = this.usersService.create(createUserDto);

    return this.authService.auth(user);
  }
}
