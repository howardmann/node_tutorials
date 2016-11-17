var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router
  .get('/', function(req, res, next) {
    db("tweets").then(data => {
      res.send(data);
    }, next)
  })
  .get('/:id', (req, res, next) => {
    var user_id = req.params.id;
    db("tweets")
      .where("user_id", user_id)
      .then(data => {
        if (!data || data.length === 0) {
          return res.send(400);
        } else {
          res.send(data);
        }
      }, next)
  })
  .post('/', (req, res, next) => {
    db("tweets")
      .insert(req.body)
      .then(data => {
        res.send(data)
      }, next)
  })
  .put('/:id', (req, res, next) => {
    var tweet_id = req.params.id;
    db("tweets")
      .where("id", tweet_id)
      .update(req.body)
      .then(data => {
        if (data === 0) {
          return res.send(400);
        }
        res.send(200);
      }, next)
  })
  .delete('/:id', (req, res, next) => {
    var tweet_id = req.params.id;
    db("tweets")
      .where("id", tweet_id)
      .delete()
      .then(data => {
        if (data === 0) {
          return res.send(400);
        }
        res.send(200);
      }, next)
  })

module.exports = router;
