var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require('../config/db.js');
require('../config/passport.js');

/* Signup view and authentication. */
router
  .get('/', function(req, res, next) {
    res.render('signup', {
      message: req.flash('message')
    });
  })
  .post('/', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  }))

module.exports = router;
