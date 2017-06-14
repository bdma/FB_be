var express = require('express');
var router = express.Router();
var dbutile = require('./db');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://fbmongodb:BbH6PnuXgCvvXyMrZzUwzgD2tmCSFhFExD1Yf4i4LerOm33xBhCwFUoiraXlqKJE1NrVUmLJVeqqg89lizAGHw==@fbmongodb.documents.azure.com:10250/mean?ssl=true&sslverifycertificate=false';


/* GET home page. */
MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  var collection = db.collection('documents');

  router.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    dbutile.find(collection, res)
    // res.render('index', { title: 'Express' });
  });
  router.get('/user', function (req, res, next) {
    res.send('respond with a resource');
  });

  // db.close();
});

module.exports = router;
