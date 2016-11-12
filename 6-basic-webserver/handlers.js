exports.homepage = function(response){
  response.setHeader('Content-Type', 'text/html');
  response.end('<h1>Hello World</h1>');
}

exports.profile = function(response) {
  var profile = {
    name: "Howie",
    age: 18
  };
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(profile));
}

exports.notFound = function(response) {
  response.statusCode = 404;
  response.setHeader('Content-Type', 'text/html');
  response.end('<h1>404 error</h1>');
}
