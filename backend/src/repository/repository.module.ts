import { Module } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { Repository } from './repository';

@Module({
  providers: [RepositoryService, Repository]
})
export class RepositoryModule {}
