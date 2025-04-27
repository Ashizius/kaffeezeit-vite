import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../repository/entities/user.entity';
import { UserRepository } from '../repository/repositories/user.repository';
import * as bcrypt from 'bcryptjs'; // импортируем bcrypt

@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepository) {}

  async create({ password, username, email }: CreateUserDto) {
    /* TODO:
    const user = await this.usersRepository.create(createUserDto);
 
    return this.usersRepository.save(user);
    */
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    const user = await this.usersRepository.createUser({
      username,
      email,
      password: { hash, salt },
    });
    return user
  }

  async findAll() {
    return `This action returns all users`;
  }

  async findById(id: string) {
    //const user = await this.usersRepository.findOne(id);
    return this.usersRepository.findById(id);
    //return `This action returns a #${id} user`;
  }

  async findByEmail(email: string) {
    /* TODO:
    const user = await this.usersRepository.findOne({ username });
    
    return user;
    */
    return this.usersRepository.findByEmail(email);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = {
      name: 'Vasya',
      email: 'pupkin@email.ru',
      password: 'qwerty',
      role: 'user',
      ver: '0.0.1',
    };
    return user;
  }

  async remove(id: string) {
    const user = {
      name: 'Vasya',
      email: 'pupkin@email.ru',
      password: 'qwerty',
      role: 'user',
      ver: '0.0.1',
    };
    return user;
  }
}
