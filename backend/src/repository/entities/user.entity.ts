import { IsNotEmpty, IsString } from 'class-validator';

export type THashedPassword = {
  hash: string;
  salt: string;
}

export class User {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  password: THashedPassword;
  @IsString()
  @IsNotEmpty()
  role: string;
  @IsString()
  @IsNotEmpty()
  ver: string;
  @IsString()
  @IsNotEmpty()
  _id: string;
}
