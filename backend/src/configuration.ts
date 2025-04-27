export interface AppDatabaseCredentials {
  username: string;
  password: string;
}

export enum EConfig {
  host = 'host',
  port = 'port',
  database = 'database',
  credentials = 'credentials',
  jwtSecret = 'jwtSecret',
  logger = 'logger',
}

enum EPEnvConfig {
  host = 'HOST',
  type = 'TYPE',
  port = 'PORT',
  database = 'DATABASE',
  credentials = 'CREDENTIALS',
  jwtSecret = 'JWT_SECRET',
  logger = 'LOGGER',
  databaseHost = 'DATABASE_HOST',
  databaseDriver = 'DATABASE_DRIVER',
  databasePort = 'DATABASE_PORT',
  databaseDatabase = 'DATABASE_DATABASE',
  databaseUsername = 'DATABASE_USERNAME',
  databasePassword = 'DATABASE_PASSWORD',
  databaseUrl = 'DATABASE_URL',
}

export interface AppConfigDatabase {
  url?: string;
  host: string;
  type: 'postgres' | 'mongodb';
  port: number;
  database: string;
  credentials: AppDatabaseCredentials;
}

export interface AppConfig {
  [EConfig.database]: AppConfigDatabase;
  [EConfig.port]: number;
  [EConfig.logger]: `${LoggerType}` | null;
}

export enum LoggerType {
  dev = 'DEV',
  tskv = 'TSKV',
  json = 'JSON',
}

export enum Providers {
  logger = 'LOGGER',
  config = 'CONFIG',
  dataSource = 'DATA_SOURCE'
}

export default () =>
  <AppConfig>{
    [EConfig.port]: parseInt(process.env[EPEnvConfig.port]) || 3000,
    [EConfig.logger]: process.env[EPEnvConfig.logger] || null,
    [EConfig.jwtSecret]: process.env[EPEnvConfig.jwtSecret] || 'someSecret',
    [EConfig.database]: {
      url: process.env[EPEnvConfig.databaseUrl] || undefined,
      host: process.env[EPEnvConfig.databaseHost] || 'localhost',
      type: process.env[EPEnvConfig.databaseDriver] || 'mongodb',
      port: parseInt(process.env[EPEnvConfig.databasePort]) || 5432,
      database: process.env[EPEnvConfig.databaseDatabase] || 'prac',
      credentials: {
        username: process.env[EPEnvConfig.databaseUsername] || 'prac',
        password: process.env[EPEnvConfig.databaseDriver] || 'prac',
      },
    },
  };
