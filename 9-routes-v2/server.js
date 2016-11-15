// Alternatively we can separate concerns of the express router to a separate directory in routes called users.js
// We require it from our server app and access it with the .use method last. This allows for separtion of concerns as well as setting the root url name. In this case is /users, which we can easliy change to /profiles etc. 

const express = require("express");
const bodyParser = require("body-parser");
const users = require("./routes/users");
const app = express();

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .use("/users", users)
;


app.listen(3000);
