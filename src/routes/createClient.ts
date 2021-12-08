import express from 'express';
import { Client } from "../entities/Client";

const router = express.Router();

router.post('/api/client', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    cardNumber,
    balance
  } = req.body;

  const client = Client.create({
    firstName,
    lastName,
    email,
    cardNumber,
    balance
  });

  await client.save();

  res.status(200).json(client);
});

export { router as createClientRouter };