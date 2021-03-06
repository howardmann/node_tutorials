var express = require('express');
var router = express.Router();
var passport = require('passport');
var knex = require('../config/db');
require('../config/passport.js');

/* GET users listing. */
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
    req.flash('message', 'Succesfully logged out');
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
