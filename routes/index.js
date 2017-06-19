var express = require('express');
var router = express.Router();


var dbutile = require('../mongo/db');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://fbmongodb:BbH6PnuXgCvvXyMrZzUwzgD2tmCSFhFExD1Yf4i4LerOm33xBhCwFUoiraXlqKJE1NrVUmLJVeqqg89lizAGHw==@fbmongodb.documents.azure.com:10250/mean?ssl=true&sslverifycertificate=false';
var config = require('../config/default.js');


/* GET home page. */
MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  router.get('/org', function (req, res) {
    let collection = db.collection('orgs');
    dbutile.find(collection, {_id: req.query.orgid}, res)
    console.log("ip:", req.ip)
    console.log("req.query.orgid:", {_id: req.query.orgid})
    // res.render('index', { title: 'Express' });
  });
  router.get('/insertorg', function (req, res) {
    let collection = db.collection('orgs');
    let org = config.org;
    dbutile.insertOne(collection, org, res)
  });
  router.get('/insertorgs', function (req, res) {
    let collection = db.collection('orgs');
    let orgs = config.orgs;
    dbutile.insertMany(collection, orgs, res)
  });
  router.get('/deleteall', function (req, res) {
    let collection = db.collection('orgs');
    dbutile.deleteMany(collection, res)
  });
  router('/feedback').post(function (req, res) {
    console.log(req.body);
    res.send(req.body)
    // let collection = db.collection('orgs');
    // dbutile.insertOne(collection, org, res)
  });


  // db.close();
});

module.exports = router;
