import express from "express";
import { createQueryBuilder } from "typeorm";

import { Client } from "../entities/Client";

const router = express();

router.get('/api/client/:clientId', async (req, res) => {
  const { clientId } = req.params;
  const client = await createQueryBuilder('banker')
    .select('client.firstName')
    .addSelect('client.lastName')
    .addSelect('client.email')
    .addSelect('client.cardNumber')
    .addSelect('client.balance')
    .from(Client, 'client')
    .where('client.id = :clientId', { clientId })
    .getOne();

  return res.json(client);
});

export { router as fetchClientRouter }