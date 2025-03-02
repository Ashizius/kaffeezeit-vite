import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  /*constructor (private usersRepository: Repository<User>) {}*/

  async create(createUserDto: CreateUserDto) {
    /* TODO:
    const user = await this.usersRepository.create(createUserDto);
 
    return this.usersRepository.save(user);
    */
    return 'This action adds a new user';
  }

  async findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string) {
    //const user = await this.usersRepository.findOne(id);
    const user = {
      userName: 'Vasya',
      password: 'qwerty',
      role: 'user',
      ver: '0.0.1',
    };
    return user;
    //return `This action returns a #${id} user`;
  }


  async findByUsername(username: string) {
    /* TODO:
    const user = await this.usersRepository.findOne({ username });
    
    return user;
    */
    return `This action returns a #${username} user`;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return `This action removes a #${id} user`;
  }




}
