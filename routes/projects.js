var express = require('express');
var router = express.Router();
// const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projects', {});
});

router.get('/1', function(req, res, next) {
  res.render('projects/1', {});
});

router.get('/2', function(req, res, next) {
  res.render('projects/2', {});
});

router.get('/3', function(req, res, next) {
  res.render('projects/3', {});
});
router.get('/4', function(req, res, next) {
  res.render('projects/4', {});
});
router.get('/5', function(req, res, next) {
  res.render('projects/5', {});
});

router.get('/6', function(req, res, next) {
  res.render('projects/6', {});
});

module.exports = router;
