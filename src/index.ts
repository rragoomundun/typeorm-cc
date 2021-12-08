import express from 'express';

import { createConnection } from 'typeorm'

import { ormconfig } from '../ormconfig';

import { createClientRouter } from './routes/createClient';
import { createBankerRouter } from './routes/createBanker';
import { createTransactionRouter } from './routes/createTransaction';
import { connectBankerToClientRouter } from './routes/connectBankerToClient';
import { deleteClientRouter } from './routes/deleteClient';
import { fetchClientRouter } from './routes/fetchClients';

const app = express();

const main = async () => {
  try {
    await createConnection(ormconfig);

    console.log('Connected to Postgres');

    app.use(express.json());
    app.use(createClientRouter);
    app.use(createBankerRouter);
    app.use(createTransactionRouter);
    app.use(connectBankerToClientRouter);
    app.use(deleteClientRouter);
    app.use(fetchClientRouter);

    app.listen(8080, () => {
      console.log('Now running on port 8080')
    });
  } catch (error) {
    console.log(error);
    console.log('Unable to connect to DB');
  }
};

main();