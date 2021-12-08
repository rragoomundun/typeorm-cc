import express from 'express';
import { Banker } from "../entities/Banker"

const router = express.Router();

router.post('/api/banker', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    cardNumber,
    employeeNumber
  } = req.body;

  const banker = Banker.create({
    firstName,
    lastName,
    email,
    cardNumber,
    employeeNumber
  });

  await banker.save();

  res.status(200).json(banker);
});

export { router as createBankerRouter };