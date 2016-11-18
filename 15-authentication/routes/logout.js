var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require('../db.js');
require('../passport.js');

/* Logout post request. Destrory session id and redirect back to root page */
router
  .get('/', function(req, res, next) {
    req.logout();
    res.redirect('/');
  });

module.exports = router;
