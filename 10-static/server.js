// Require express library and cache in server variable (or app)
var express = require('express');
var server = express();

// Express static helper can load index.html of directory directly. Directory file needs to be absolute path so we use __dirname
// Find the direct folder name of the public folder. __dirname outputs the name of the root directory which in this instance is /Users/howardmann/node_tutorials/10-static
var staticAssets = __dirname + '/public';

server.get('/', express.static(staticAssets));

server.listen(3000);
