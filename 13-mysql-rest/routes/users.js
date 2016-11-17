var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router
  .get('/', function(req, res, next) {
    db("users").then(data => {
      res.send(data);
    }, next)
  })
  .get('/:id', (req, res, next) => {
    var user_id = req.params.id;
    db("users")
      .where("id", user_id)
      .first()
      .then(data => {
        if (!data) {
          return res.send(400);
        } else {
          res.send(data);
        }
      }, next)
  })
  .post('/', (req, res, next) => {
    db("users")
      .insert(req.body)
      .then(data => {
        res.send(data)
      }, next)
  })
  .put('/:id', (req, res, next) => {
    var user_id = req.params.id;
    db("users")
      .where("id", user_id)
      .update(req.body)
      .then(result => {
        // When we put/ update it returns a result of 1 or 0, if the result is 0 then we have it send a bad request otherwise we sned 200 status. Otherwise will keep loading
        if (result === 0) {
          return res.send(400)
        }
        res.send(200);
      }, next)
  })
  .delete('/:id', (req, res, next) => {
    var user_id = req.params.id;
    db("users")
      .where("id", user_id)
      .delete()
      .then(result => {
        // When we put/ update it returns a result of 1 or 0, if the result is 0 then we have it send a bad request otherwise we sned 200 status. Otherwise will keep loading
        if (result === 0) {
          return res.send(400)
        }
        res.send(200);
      }, next)
  })



module.exports = router;
