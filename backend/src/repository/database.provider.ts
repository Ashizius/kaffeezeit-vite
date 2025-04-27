
import { ConfigService } from '@nestjs/config';
import mongoose, { Mongoose } from 'mongoose';
import { AppConfigDatabase, EConfig, Providers } from '../configuration';



async function connectToMongoose(url:string): Promise<Mongoose> {
  /*try {
    return mongoose.connect(url);
  } catch (error) {
    console.error('Error connecting to the database', error);
  }*/
    return mongoose.connect(url);
}


export const databaseProvider = {
  provide: Providers.dataSource,
  useFactory: async (config: ConfigService)=> {
    const url = config.get<AppConfigDatabase>(EConfig.database).url;
    console.log(config.get<AppConfigDatabase>(EConfig.database).url);
    //return connectToMongoose(url);
    return Promise.resolve({ok:'ok'})
  },
  inject: [ConfigService],
};

export type DBConnection = ReturnType<Awaited<typeof databaseProvider.useFactory>>;