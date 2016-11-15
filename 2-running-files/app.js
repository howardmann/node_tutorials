// argv index position starts at 2. E.g. if terminal command is node app 1 then 0 is node app is 1 and 1 is 2

// First argument will be command string
var command = process.argv[2];

// Second and third command will be our a & b variables
var a = parseInt(process.argv[3]);
var b = parseInt(process.argv[4]);

if (command === 'add') {
  console.log(a + b);
} else if (command === 'subtract') {
  console.log(a - b);
} else if (command === 'multiply') {
  console.log(a * b);
} else if (command === 'divide') {
  console.log(a / b);
} else {
  console.log("command not recognised");
}
