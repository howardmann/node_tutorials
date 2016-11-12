// Our package.json file is similar to our gemfile in Rails. To install we run the command ~ npm init in terminal and press enter to accept fields:
  // ~ npm init
// To install new npm packages we run --save or --save-dev for dev only (i.e. testing). In the example we ran the following commands for lodash axios and mocha (testing)
  // npm install --save lodash
  // npm install --save axios
  // npm install --save-dev mocha

// Require from npm (similar to ruby gems). When requiring from npm we only specify the names and not the file path
// lodash similar to underscore utility toolbelt
// axios similar to jQuery's $.ajax request helpers


// Require your dependencies at the beginning
var _ = require('lodash');
var axios = require('axios');

// Simple ajax fetch request which returns an array of object names using axios. We then use lodash (or we could use underscore) to find the object in the array with the name 'Jake'
axios.get('http://rest.learncode.academy/api/myuser/friends').then((res) => {
  var jake = _.find(res.data, el => el.name === "Jake");
  console.log(jake);
});
