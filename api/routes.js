/**
  manage api requests
**/
import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';

const router = express.Router();

let mongoDb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  mongoDb = db;
});

router.get('/products', (req, res) => {
  let products = {};
  mongoDb.collection('products').find({})
   .project({ // just the data we want
     productName: 1,
     productDescription: 1
   })
   .each((err, product) => {
     assert.equal(null, err);

     if (!product) { // no more products
       res.send({ products });
       return;
     }

     products[product._id] = product;
   });
});

router.get('/areas/:areaIds', (req, res) => {
  const areaIds = req.params.areaIds.split(',').map(ObjectID);
  let areas = {};
  mongoDb.collection('productSalesAreas').find({ _id: {$in: areaIds}})
   .each((err, area) => {
     assert.equal(null, err);

     if (!area) { // no more products
       res.send({ areas });
       return;
     }

     areas[area._id] = area;
   });
});

router.get('/products/:productId', (req, res) => {
  mongoDb.collection('products')
       .findOne({ _id: ObjectID(req.params.productId) })
       .then(product => res.send(product))
       .catch(console.error);
});

export default router;
