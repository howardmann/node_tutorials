var express = require('express');
var router = express.Router();


/* GET Pages. */
router
  .get('/contact', function(req, res, next) {
    res.render('pages/contact');
  })
  .get('/certification', function(req, res, next) {
    res.render('pages/certification');
  })
  .get('/insurance', function(req, res, next) {
    res.render('pages/insurance');
  })

module.exports = router;
