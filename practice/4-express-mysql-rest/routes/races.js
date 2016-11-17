var express = require('express');
var router = express.Router();
var db = require('../db.js');

/* GET users listing. */
router
.get('/', (req, res, next) => {
  db('races')
    .then( data => {
      res.send(data);
    }, next)
})
.get('/:id', (req, res, next) => {
  var race_id = req.params.id;
  db('races')
    .where('id', race_id)
    .first()
    .then( data => {
      if (!data) { return res.send(400); };
      res.send(data);
    }, next)
})

module.exports = router;
