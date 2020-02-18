
var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("ttt");
  let rawdata = fs.readFileSync('./public/list.json');
  let myport = JSON.parse(rawdata);
  console.log("tetst", myport);
  res.render('index', {portlist:myport});
});

module.exports = router;