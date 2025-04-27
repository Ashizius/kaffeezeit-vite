import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../users/users.service';
import { EConfig } from '../../configuration';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {
    super({
      /* Указываем, что токен будет передаваться в заголовке Authorization в формате Bearer <token> */
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      //secretOrKey: 'TODO: ЗАМЕНИТЬ',
      /* Получаем секрет для подписи JWT токенов из конфигурации */
      secretOrKey: configService.get<string>(EConfig.jwtSecret), 
    });
  }

  /**
   * Метод validate должен вернуть данные пользователя 
   * В JWT стратегии в качестве параметра метод получает полезную нагрузку из токена
   */
  async validate(jwtPayload: { id: string }) {
    /* В subject токена будем передавать идентификатор пользователя */
    const {password:_,...user} = await this.usersService.findById(jwtPayload.id);
    console.log('jwtPayload!!', jwtPayload, user);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
} 