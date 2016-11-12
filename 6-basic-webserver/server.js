// require npm builtin module http to create a server
// http.createServer takes a function as an argument with two args request and response
var http = require('http');
var handlers = require('./handlers.js');

var server = http.createServer(function(request, response){
  // var headers = request.headers;
  // var method = request.method;
  var url = request.url;
  // console.log(headers, method, url);

  if (url === "/") {
    handlers.homepage(response);
  } else if (url === "/profile") {
    handlers.profile(response);
  } else {
    handlers.notFound(response);
  }


});

server.listen(3000);
