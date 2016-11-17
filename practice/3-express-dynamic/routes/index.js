var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Index',
    partials: {header: '_header.hjs', footer: '_footer.hjs'} 
  });
});

module.exports = router;
