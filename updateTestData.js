// product areas are using a custom id, convert data in Product db to use mongodb _ids


import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  let productCount = 0;
  db.collection('products').find({}).each((err, product) => {
    assert.equal(null, err);
    if (!product) { return; }

    productCount++;
    db.collection('productSalesAreas')
      .find({ id: { $in: product.areaIds }})
      .project({ _id: 1 })
      .toArray()
      .then(_ids => {
        const newIds = _ids.map(o => o._id);
        db.collection('products').updateOne(
          { id: product.id },
          { $set: { areaIds: newIds } }
        ).then(() => {
          console.info('Updated', product._id);
          productCount--;
          if (productCount === 0) { db.close(); }
        });
      })
      .catch(console.error);
  });

});
