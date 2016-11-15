// Import JavaScript file from same directory
// Stores it as an object in math variable
var math = require('./math.js');

// console.log(math);
// In terminal run node app will return an object literal from './math.js'
/*
{ add: [Function: add],
  subtract: [Function: subtract],
  multiply: [Function: multiply] }
*/

var command = process.argv[2];
var a = Number(process.argv[3]);
var b = Number(process.argv[4]);

// Equivalent to accessing the math object literal and selecting the property variable passed as command which returns a function accepting two arguments (a,b) which we pass from the terminal argv
if (math[command] === undefined) {
  var value = 'command unrecognised'
} else {
  var value = math[command](a,b);
}


console.log(value);

// In terminal:
// ~ node app add 1 2 => 3
// ~ node app subtract 1 2 => -1
