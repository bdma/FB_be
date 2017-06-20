var assert = require('assert');


var dbutile = {
  find: function (collection, obj, res) {
    // Find some documents
    collection.find(obj).toArray(function (err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      if(docs.length>0){
        res.send({
            code:'0',
            message:"successed",
            data:docs
          });
      }else{
        res.send({
            code:'1',
            message:"not find",
            data:docs
          });
      }
    });
  },
  insertOne: function (collection, obj, res) {
    collection.insertOne(
      obj
    , function (err, result) {
      assert.equal(err, null);
      console.log("Inserted 1 document into the collection");
      res.send('inserted!');
    });
  },
  insertMany: function (collection, objs, res) {
    collection.insertMany(
      objs
    , function (err, result) {
      assert.equal(err, null);
      console.log("Inserted  documents into the collection");
      res.send('inserted!');
    });
  },
  deleteMany: function (collection, res) {
    collection.deleteMany({}, function (err, result) {
      assert.equal(err, null);
      // assert.equal(1, result.result.n);
      console.log("Removed the document with the field a equal to 3");
      res.send('deleted!');
    });
  }
}
// dbutile.find(res)
module.exports = dbutile;