import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs'; // импортируем bcrypt
import { LoginUserDto } from '../users/dto/login-user.dtoy';
import { THashedPassword, User } from '../repository/entities/user.entity';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
//TODO: import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  auth(user: Pick<User, '_id'> /* TODO: replace to User */) {
    const payload = { id: user._id };
    console.log(payload);
    return { access_token: this.jwtService.sign(payload) };
  }

  async validateUser(userBody: LoginUserDto) {
    const userRequest = plainToClass(LoginUserDto, userBody);
    const errorsClass = await validate(userRequest, {
      validationError: { target: false, value: false },
    });
    const errors = errorsClass
      .flatMap((error) => Object.values(error.constraints))
      .join('; ');
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    const user = await this.usersService.findByEmail(userRequest.email);
    //console.log(bcrypt.genSaltSync())
    /* актуальный пользовательский пароль обязательно должен быть захэширован */
    //console.log(hash)
    if (user) {
      if (await this.isValidPassword(userRequest.password, user.password)) {
        /* Исключаем пароль из результата */
        const { password, ...result } = user;
        return result;
      }
    }

    return null;
  }

  async isValidPassword(password: string, hashedPassword: THashedPassword) {
    const hash = await bcrypt.hash(password, hashedPassword.salt);
    return hashedPassword.hash === hash;
  }
}
