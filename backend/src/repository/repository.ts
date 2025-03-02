import { Injectable } from '@nestjs/common';
import { DBConnection } from './database.provider';

@Injectable()
export class Repository {
  constructor(
    @Inject('DATA_SOURCE') private readonly connection: DBConnection, // подключаемся к серверу MongoDB
  ) {

  }
}
