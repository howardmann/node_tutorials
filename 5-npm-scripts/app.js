// npm scripts
// In package.json we add a scripts property which accepts a string representing a terminal command, this is similar to our rake tasks in ruby
// In our example we have a scripts start property which when run 'npm start' will run the command in the terminal
// Below that we have our
/*
{
  "name": "5-npm-scripts",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app", // => ~ npm start
    "dev": "nodemon app", // => ~ npm run dev
    "test": "node test", // => ~ npm test
    "test-watch": "nodemon test" // => npm run test-watch
  },
  "author": "",
  "license": "ISC"
}
*/


var math = require('./math');

var addValue = math.add(3,6);
var subtractValue = math.subtract(3,6);
var multiplyValue = math.multiply(3,6);

console.log(addValue, subtractValue, multiplyValue);
