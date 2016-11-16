var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Index page',
    partials: {header: '_header.hjs'}
  });
});

module.exports = router;