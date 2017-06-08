var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  // res.render('index', { title: 'Express' });
  res.send('Hello Worldsadsad!');
=======
  res.render('index', { title: 'Express' });
>>>>>>> test
});

module.exports = router;
