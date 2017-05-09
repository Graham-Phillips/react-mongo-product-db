# react-mongo-product-db
Simple full-stack CRUD app utilising isomorphic React for the UI, Node, express and mongodb for the REST api

loadTestData.js is a simple script for getting data into MongoDb, using babel-node (installed with the babel cli). On windows, add babel-node to your path (.\node_modules\.bin), then run from cmd line (while your mongo instance is running- default test db)
babel-node loadTestData
