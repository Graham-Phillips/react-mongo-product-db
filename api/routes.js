/**
  manage api requests
**/
import express from 'express';
import data from '../src/testData';

const router = express.Router();
const products = data.products.reduce((obj, product) => {
    obj[product.id] = product;
    return obj;
  }, {});

router.get('/products', (req, res) => {
  res.send(
    // products is an array, convert to an object via reduce for easy lookup...
    { products: products
    }
  );
});

export default router;
