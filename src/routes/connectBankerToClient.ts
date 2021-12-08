import express from 'express';
import { Client } from "../entities/Client";
import { Banker } from "../entities/Banker";

const router = express.Router();

router.put('/api/banker/:bankerId/client/:clientId', async (req, res) => {
  const { bankerId, clientId } = req.params;

  const client = await Client.findOne(parseInt(clientId));
  const banker = await Banker.findOne(parseInt(bankerId));

  if (banker && client) {
    if (banker.clients === undefined) {
      banker.clients = [];
    }

    banker.clients.push(client);
    await banker.save();

    return res.status(200).json({ msg: 'Banker connected to client' });
  }

  return res.status(200).json({ msg: 'Banker or client not found' });
});

export { router as connectBankerToClientRouter };