import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';

const userDataBase:User[] = [];

@Injectable()
export class UserRepository {

  async findByEmail(email:User['email']):Promise<User> {
    const user = userDataBase.find(user=>user.email===email)
    return Promise.resolve(user)
  }


  async findById(id:User['_id']):Promise<User> {
    console.log('findById',id);
    const user = userDataBase.find(user=>user._id===id)

    return Promise.resolve(user)
  }

  async createUser ({email,password,username}:Pick<User,'email'|'password'|'username'>) {
    const user:Omit<User,'password'> = {username,email,role:'user',ver:'0.0.1',_id:String(Math.random())}
    userDataBase.push({...user,password})
    return Promise.resolve(user)
  }
}
