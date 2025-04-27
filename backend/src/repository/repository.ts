import { Inject, Injectable } from '@nestjs/common';
import { DBConnection } from './database.provider';
import { Providers } from '../configuration';



@Injectable()
export class Repository {
  constructor(
    @Inject(Providers.dataSource) private readonly connection: DBConnection, // подключаемся к серверу MongoDB
  ) {}
}
