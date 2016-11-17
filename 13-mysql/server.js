var express = require('express');
var bodyParser = require('body-parser');
var knex = require('knex');

var server = express();

var db = knex({
  // References the type of db we are accessing
  client: 'mysql',
  // Takes information of where we hosted our db, the name of it and the name of the database we created on our sequel pro
  connection: {
    host: '127.0.0.1',
    user: 'root',
    database: 'test'
  }
});

// use bodyParser for later to receive forms
server
  .use(bodyParser.json())
  .get('/users', (req, res) => {
    // Syntax to fetch users table from db and then with promise, after we fetch then we send it back, then we have a final next callback
    db('users').then(data => {
      res.send(data);
    });
  })
  .get('/tweets', (req, res) => {
    db('tweets').then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err)
    });
  })
  .get('/profiles', (req, res) => {
    db('profiles').then(data => {
      res.send(data);
    });
  })

server.listen(3000);
