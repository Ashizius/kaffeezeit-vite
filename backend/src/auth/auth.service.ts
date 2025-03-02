import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
//TODO: import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
  ) {}

  auth(user: any/* TODO: replace to User */) {
    const payload = { sub: user.id };

    return { access_token: this.jwtService.sign(payload) };
  }

  async validatePassword(username: string, password: string) {
    const user = await this.usersService.findByUsername(username); 
        
    /* актуальный пользовательский пароль обязательно должен быть захэширован */
    const hash = await bcrypt.hash(password, user.salt);
    if (user && user.passwordHash === hash) {
      /* Исключаем пароль из результата */
      const { password, ...result } = user;

      return user;
    }

    return null;
  }
}
