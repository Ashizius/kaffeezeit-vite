import { Body, Controller, Get, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { LocalAuthGuard } from '../guards/local.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from '../users/dto/login-user.dtoy';
import { JwtGuard } from '../guards/jwt.guard';
import { User } from '../repository/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private usersService: UsersService,
  ) {}

  @UseGuards(JwtGuard)
  @Get()
  async authByToken(@Req() req) {
    //Passport automatically creates a user object, based on the value we return from the validate() method, and assigns it to the Request object as req.user.
    const user = req.user;
    return user;
  }

  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('login')
  async login(@Req() req) {
    const user = req.user as Awaited<ReturnType<AuthService['validateUser']>>
    /* Генерируем для пользователя JWT-токен */
    return {...this.authService.auth(user), user};
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    /* При регистрации создаём пользователя и генерируем для него токен */
    const user = await this.usersService.create(createUserDto);

    return {...this.authService.auth(user), user};
  }
}
