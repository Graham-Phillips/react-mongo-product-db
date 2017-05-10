import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  db.collection('products').insertMany([
    { id: 1, productName: 'Gizmo',  productDescription: `
The Gizmo is a premium quality traditional gizmo, manufactured in our UK facility, and offers unparalleled performance and cost parameters
      `, price: '£19.99',
      areaIds: [101, 102] },
    { id: 2, productName: 'Doohickey',  productDescription: `
Our Doohickey has been voted #1 3 years running in the National Doohickey Awards. Manufactured from premium grade malamine and geranium extract, the Doohickey is certain to form a valuable part of your range of gizmo related articles.
      `, price: '£9.99',
      areaIds: [] },
    { id: 3, productName: 'The Fabulous Thingie Product', productDescription: `
Marvel at the Fabulous Thingie, the zenith of our years of expertise and R&D effort. The FT can do the job of 2 Doohickies and a Gizmo, at less than half the price.
    `, price: '£24.99',
      areaIds: [103, 104, 105] },
    { id: 4, productName: 'Automatic Spaghetti Discombobulation Machine', productDescription: `
The premium product for spaghetti discombobulation
    `, price: '£34.99',
      areaIds: [] }
  ]).then(response => {
    console.info('Products', response.insertedCount);
    db.collection('productSalesAreas').insertMany([
      { id: 101, name: 'W Europe', timestamp: new Date() },
      { id: 102, name: 'E Europe', timestamp: new Date() },
      { id: 103, name: 'N America', timestamp: new Date() },
      { id: 104, name: 'S America', timestamp: new Date() },
      { id: 105, name: 'China', timestamp: new Date() },
      { id: 106, name: 'Australasia', timestamp: new Date() },
    ]).then(response => {
      console.info('ProductSalesAreas', response.insertedCount);
      db.close();
    });
  });
});
