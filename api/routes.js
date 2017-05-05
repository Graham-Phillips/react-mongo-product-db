/**
  manage api requests
**/
import express from 'express';
import data from '../src/testData';

const router = express.Router();
  // products is an array, convert to an object via reduce for easy lookup...
const products = data.products.reduce((obj, product) => {
    obj[product.id] = product;
    return obj;
  }, {});

router.get('/products', (req, res) => {
  res.send(
    {
      products: products
    }
  );
});

// get with dynamic productId
router.get('/products/:productId', (req, res) => {
  // get product from id in url
  let product = products[req.params.productId];
  //product.description = "ham bacon sausage yum";
  res.send(product);
});

export default router;
