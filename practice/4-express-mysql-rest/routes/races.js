var express = require('express');
var router = express.Router();
var db = require('../db.js');

/* GET users listing. */
router
  .get('/', (req, res, next) => {
    db.knex('races')
      .then( data => {
        res.render('races/races', {
          title: 'Races index',
          races: data,
          partials: {header: '_header'}
        });
      }, next)
  })
  .get('/:id', (req, res, next) => {
    var race_id = req.params.id;

    db.Race
      .where({id: race_id})
      .fetch({withRelated: ['heroes']})
      .then( data => {
        // res.send(data.toJSON());
        if (!data) { return res.send(400); };
        res.render('races/race', {
          title: 'Race show',
          race: data.toJSON(),
          partials: {header: '_header'}
        });
      }, next)
  })
  .post('/', (req, res, next) => {
    db.knex('races')
      .insert(req.body)
      .then( data => {
        res.send(data);
      }, next)
  })
  .put('/:id', (req, res, next) => {
    var race_id = req.params.id;
    db.knex('races')
      .where('id', race_id)
      .update(req.body)
      .then( result => {
        if (result === 0) { return res.send(400);};
        res.send(200);
      }, next)
  })
  .delete('/:id', (req, res, next) => {
    var race_id = req.params.id;
    db.knex('races')
      .where('id', race_id)
      .delete()
      .then( result => {
        if (result === 0) { return res.send(400);};
        res.send(200);
      }, next)
  })


module.exports = router;
