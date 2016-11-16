var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', {
    title: 'Contact Me',
    email: 'howie@email.com',
    phone: '123456',
    partials: {header: '_header.hjs'}
  });
});

module.exports = router;
