var express = require('express');
var router = express.Router();


var dbutile = require('../mongo/db');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// var url = 'mongodb://fbmongodb:BbH6PnuXgCvvXyMrZzUwzgD2tmCSFhFExD1Yf4i4LerOm33xBhCwFUoiraXlqKJE1NrVUmLJVeqqg89lizAGHw==@fbmongodb.documents.azure.com:10250/mean?ssl=true&sslverifycertificate=false';
var url = 'mongodb://localhost:27017/test';
var config = require('../config/default.js');


/* GET home page. */
MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  router.get('/', function (req, res) {
    // let collection = db.collection('orgs');
    // dbutile.find(collection, { orgId: req.params.orgid }, res)
    // console.log("ip:", req.ip)
    res.send('indesdkajskdx');
  });
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
    let collection = db.collection('feedbacks');
    // let feedback = JSON.parse(req.body);
    console.log("req.body:",req.body);
    // console.log("feedback:",feedback);
    dbutile.insertOne(collection, req.body, res)
    // res.send('req')
  });
  router.get('/feedback/:memberId', function (req, res) {
    let collection = db.collection('feedbacks');
    dbutile.find(collection, {memberId: req.params.memberId}, res)
    console.log("req.query.memberId:", { memberId: req.query.memberId })
    // res.render('index', { title: 'Express' });
  });
  router.post('/upfb', function (req, res) {
    console.log(req.body);
    // res.sende(req.body);
    let collection = db.collection('feedbacks');
    // let feedback = config.feedback;
    // let reqnody=JSON.parse(req.body)
    let queryObj = {
      memberId: req.body.memberId,
      date:req.body.date
    }
    let nobj=req.body
    console.log("queryObj:",queryObj);
    console.log("nobj:",nobj);
    dbutile.updateOne(collection, queryObj, nobj, res)
    //  res.send(nobj)
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
