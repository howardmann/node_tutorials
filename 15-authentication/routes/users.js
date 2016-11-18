var express = require('express');
var router = express.Router();
var db = require('../db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.knex('users')
    .then(data => {
      res.send(data);
    }, next)
});

module.exports = router;
