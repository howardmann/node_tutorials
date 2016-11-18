var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require('../db.js');
require('../passport.js');

/* Login view and authentication. */
router
  .get('/', function(req, res, next) {
    res.render('login');
  })
  .post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }))

module.exports = router;
