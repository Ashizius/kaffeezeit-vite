import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { LoginUserDto } from './login-user.dtoy';
import { PickType } from '@nestjs/mapped-types';
import { User } from '../../repository/entities/user.entity';

export class CreateUserDto extends PickType(User, [
  'username',
  'email',
]) {
  @IsString()
  @IsNotEmpty()
  password: string;
}
