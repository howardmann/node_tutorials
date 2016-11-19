var express = require('express');
var router = express.Router();
var knex = require('../config/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex("users")
    .then(data => {
      res.send(data);
    }, next)
});

module.exports = router;
