var express = require('express');
var passport = require('passport');
var router = express.Router();
var db = require('../config/db.js');

/* GET users listing. */
router
  .get('/', loginRequired, function(req, res, next) {
    db.knex('users')
      .then(data => {
        res.send(data);
      }, next)
});

module.exports = router;
