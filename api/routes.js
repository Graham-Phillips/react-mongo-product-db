/**
  manage api requests
**/
import express from 'express';

const router = express.Router();

router.get('/products', (req, res) => {
  res.send({data: [] });
});

export default router;
