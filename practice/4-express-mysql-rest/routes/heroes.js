var express = require('express');
var router = express.Router();
var db = require('../db.js');

router
  .get('/', (req, res, next) => {
    db.Hero
      .fetchAll({withRelated: ['race']})
      .then( data => {
        res.render('heroes/heroes', {
          title: 'Heroes index',
          heroes: data.toJSON(),
          partials: {header: '_header'}
        });
      }, next)
  })
  .get('/:id', (req, res, next) => {
    var hero_id = req.params.id;
    db.Hero
      .where({id: hero_id})
      .fetch({withRelated: ['race']})
      .then( data => {
        if (!data) { return res.send(400); };
        res.render('heroes/hero', {
          title: 'Hero show',
          hero: data.toJSON(),
          partials: {header: '_header'}
        });
      }, next)
  })
  .post('/', (req, res, next) => {
    db.knex('heroes')
      .insert(req.body)
      .then( data => {
        res.send(data);
      }, next)
  })
  .put('/:id', (req, res, next) => {
    var hero_id = req.params.id;
    db.knex('heroes')
      .where('id', hero_id)
      .update(req.body)
      .then( result => {
        if (result === 0) { return res.send(400);};
        res.send(200);
      }, next)
  })
  .delete('/:id', (req, res, next) => {
    var hero_id = req.params.id;
    db.knex('heroes')
      .where('id', hero_id)
      .delete()
      .then( result => {
        if (result === 0) { return res.send(400);};
        res.send(200);
      }, next)
  })


module.exports = router;
