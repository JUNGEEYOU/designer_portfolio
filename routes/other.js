var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("ttt");
  let rawdata = fs.readFileSync('./public/list.json');
  let myport = JSON.parse(rawdata);
  res.render('other', {portlist:myport});
});

module.exports = router; 
