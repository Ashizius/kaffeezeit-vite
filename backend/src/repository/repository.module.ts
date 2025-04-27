import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { Repository } from './repository';
import { databaseProvider } from './database.provider';


@Module({
  providers: [UserRepository, Repository, databaseProvider],
  exports: [UserRepository]
})
export class RepositoryModule {}
