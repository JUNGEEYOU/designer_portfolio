var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  let rawdata = fs.readFileSync('./public/list.json');
  let myport = JSON.parse(rawdata);
  console.log("my pre ", myport);
  res.render('pre', {portlist:myport});
});

module.exports = router;
