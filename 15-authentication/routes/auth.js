var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require('../config/db.js');
require('../config/passport.js');

/* Login view and authentication. */
router
  .get('/login', function(req, res, next) {
    res.render('login', {
      message: req.flash('message')
    });
  })
  .post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))
  .get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
  })
  .get('/signup', function(req, res, next) {
    res.render('signup', {
      message: req.flash('message')
    });
  })
  .post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  }))


module.exports = router;
