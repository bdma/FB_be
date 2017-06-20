var express = require('express');
var router = express.Router();


var dbutile = require('../mongo/db');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// var url = 'mongodb://fbmongodb:BbH6PnuXgCvvXyMrZzUwzgD2tmCSFhFExD1Yf4i4LerOm33xBhCwFUoiraXlqKJE1NrVUmLJVeqqg89lizAGHw==@fbmongodb.documents.azure.com:10250/mean?ssl=true&sslverifycertificate=false';
var url = 'mongodb://localhost:27017/test';
var url = "mongodb://mario:0w1a0v1e@cluster0-shard-00-00-0yjb4.mongodb.net:27017,cluster0-shard-00-01-0yjb4.mongodb.net:27017,cluster0-shard-00-02-0yjb4.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
var config = require('../config/default.js');


/* GET home page. */
MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  router.get('/org/:orgid', function (req, res) {
    let collection = db.collection('orgs');
    dbutile.find(collection, { orgId: req.params.orgid }, res)
    console.log("ip:", req.ip)
    console.log("req.query.orgid:", { _id: req.query.orgid })
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
  router.post('/feedback', function (req, res) {
    console.log(req.body);
    let collection = db.collection('feedbacks');
    // let feedback = config.feedback;
    dbutile.insertOne(collection, req.body, res)
  });
  router.get('/feedback/:memberId', function (req, res) {
    let collection = db.collection('feedbacks');
    dbutile.find(collection, {memberId: req.params.memberId}, res)
    console.log("req.query.memberId:", { memberId: req.query.memberId })
    // res.render('index', { title: 'Express' });
  });
  // route('/feedback').post(function (req, res) {
  //   console.log(req.body);
  //   res.send(req.body)
  //   // let collection = db.collection('orgs');
  //   // dbutile.insertOne(collection, org, res)
  //   // next();
  // });


  // db.close();
});

module.exports = router;
