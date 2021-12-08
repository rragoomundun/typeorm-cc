import { ConnectionOptions } from "typeorm";

import { Banker } from './src/entities/Banker';
import { Client } from './src/entities/Client'
import { Transaction } from './src/entities/Transaction'

export const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: '',
  password: "",
  database: '',
  entities: [Client, Banker, Transaction],
  synchronize: false
}