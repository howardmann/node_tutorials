var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require('../config/db.js');
require('../config/passport.js');

/* Login view and authentication. */
router
  .get('/', function(req, res, next) {
    res.render('login', {
      message: req.flash('message')
    });
  })
  .post('/', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))

module.exports = router;