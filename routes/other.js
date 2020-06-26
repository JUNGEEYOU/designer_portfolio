var express = require('express');
var router = express.Router();
const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('other', {});
});

router.get('/1', function(req, res, next) {
  res.render('other/1', {});
});

router.get('/2', function(req, res, next) {
  res.render('other/2', {});
});


module.exports = router; 
