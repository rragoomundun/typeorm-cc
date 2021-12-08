import express from "express";
import { Transaction, TransactionTypes } from "../entities/Transaction";
import { Client } from "../entities/Client";

const router = express.Router();

router.post('/api/client/:clientId/transaction', async (req, res) => {
  const { clientId } = req.params;
  const { type, amount } = req.body;

  const client = await Client.findOne(parseInt(clientId));

  if (!client) {
    return res.status(400).json({ msg: "Client not found" });
  }

  const transaction = Transaction.create({
    amount,
    type,
    client
  });

  await transaction.save();

  if (type === TransactionTypes.DEPOSIT) {
    client.balance = Number(client.balance) + amount;
  } else if (TransactionTypes.WITHDRAW) {
    client.balance = Number(client.balance) - amount;
  }

  await client.save();

  return res.status(200).json({ msg: 'Transaction added' });
})

export { router as createTransactionRouter };