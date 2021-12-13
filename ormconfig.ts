import path from 'path';

import { ConnectionOptions } from "typeorm";

import { Banker } from './src/entities/Banker';
import { Client } from './src/entities/Client';
import { Transaction } from './src/entities/Transaction';

const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: '',
  password: "",
  database: 'typeorm',
  entities: [Client, Banker, Transaction],
  migrationsRun: true,
  migrations: [path.resolve(__dirname, './src/migrations/**')],
  logging: false,
  synchronize: false,
  dropSchema: false
};

export = ormconfig;