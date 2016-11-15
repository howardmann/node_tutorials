// Install express node package and nodemon for realtime load as dev dependencies
  // ~ npm init
  // ~ npm install --save express
  // ~ npm install --save-dev nodemon
// Express is a library that makes it easier for us to route url requests than using node's vanilla 'http' builtin
// Things that make it easier include not having to set the response header and JSON stringify data
// E.g. in http we would need to find out the url and set conditionals and then send back a response by setting the header and data type
/*
  // USING HTTP
  var http = require('http');

  var server = http.createServer(function(request, response){
    var url = request.url;

    if (url === "/") {
      response.setHeader("Content-Type", "text/html");
      response.end("<h1>Hello World</h1>")
    } else if (url === "/profile") {
      var profile = {name: 'Howie', age: 18};

      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify(profile));
    }
  });

  server.listen(3000);

  // SAME USING EXPRESS
  var express = require('express');
  var server = express();

  server
    .get('/', function(request, response){
      response.send('<h1>Hello World</h1>')
    })
    .get('/profile', function(request, response){
      var profile = {name: 'Howie', age: 18};
      response.send(profile);
    })

  server.listen(3000)

*/

var express = require("express");
var server = express();

// Different to example above. Express framework uses middleware function called .use which prepopulates data for other functions. In example above it caches the object profile into the request as a profile property which can be sent later on
// Note we use ES6 style short hand and req and res shorthand
server
  .use((req, res, next) => {
    req.profile = {name: 'Howie', age: 18};
    // Important: We must remember to call next() in order to listen to url routes further down
    next();
  })
  .get('/', (req, res) => {
    res.send('<h1>Ola World!</h1>');
  })
  .get('/profile', (req, res) => {
    res.send(req.profile);
  });

server.listen(3000);
