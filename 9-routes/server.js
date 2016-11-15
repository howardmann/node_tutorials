// We use another npm package 'body-parser' to be able to read submitted data from forms
// Make sure to require body-parser after express and before any other modules
// The urlencoded method within body-parser tells it to extract data from the <form> element and add them to the body property in the request object
// However, in this exercise we are only reading json and not form data yet

var express = require('express');
var bodyParser = require('body-parser');
var server = express();

var users = [{
  "id": 1,
  "first_name": "Beverly",
  "last_name": "Young",
  "email": "byoung0@taobao.com",
  "gender": "Female",
  "ip_address": "117.1.254.237"
}, {
  "id": 2,
  "first_name": "Joan",
  "last_name": "Sims",
  "email": "jsims1@cloudflare.com",
  "gender": "Female",
  "ip_address": "186.36.184.240"
}, {
  "id": 3,
  "first_name": "Ronald",
  "last_name": "Ramirez",
  "email": "rramirez2@wordpress.org",
  "gender": "Male",
  "ip_address": "187.149.254.89"
}, {
  "id": 4,
  "first_name": "Katherine",
  "last_name": "Larson",
  "email": "klarson3@last.fm",
  "gender": "Female",
  "ip_address": "72.210.99.85"
}, {
  "id": 5,
  "first_name": "Peter",
  "last_name": "Evans",
  "email": "pevans4@independent.co.uk",
  "gender": "Male",
  "ip_address": "105.38.217.147"
}, {
  "id": 6,
  "first_name": "Irene",
  "last_name": "Peters",
  "email": "ipeters5@vkontakte.ru",
  "gender": "Female",
  "ip_address": "241.4.67.226"
}, {
  "id": 7,
  "first_name": "Roger",
  "last_name": "Banks",
  "email": "rbanks6@upenn.edu",
  "gender": "Male",
  "ip_address": "235.109.44.63"
}, {
  "id": 8,
  "first_name": "Martha",
  "last_name": "Jacobs",
  "email": "mjacobs7@forbes.com",
  "gender": "Female",
  "ip_address": "157.182.2.221"
}, {
  "id": 9,
  "first_name": "Ralph",
  "last_name": "Gordon",
  "email": "rgordon8@craigslist.org",
  "gender": "Male",
  "ip_address": "84.70.49.210"
}, {
  "id": 10,
  "first_name": "Paula",
  "last_name": "Montgomery",
  "email": "pmontgomery9@networkadvertising.org",
  "gender": "Female",
  "ip_address": "122.145.91.223"
}];

server
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .get('/', (req, res) => {
    res.send(users);
  })
  .get('/gender/:gender', (req, res) => {
    // Order for routes is important, similar to rails. More specific goes up top and least specific at bottom, otherwise the /:id url will catch everything
    console.log(req.params);
    var gender = req.params.gender;

    var usersFiltered = users.filter(user => user.gender == gender);
    res.send(usersFiltered);
  })
  .get('/:id', (req, res) => {
    console.log(req.params);
    // params returns similar to rails as {id: '2'}
    // To access it we need to select req.params.id . In rails we did this as params[:id] using ruby hashes, but in JavaScript we use straight JSON
    var id = req.params.id;
    var user = users.find(user => user.id == id);
    res.send(user);
  })
  // We wont use the delete request yet because our browser cannot send a http delete request as  yet. This is just for illustration purposes as there will not be persistence and state with the server as yet
  .delete('/:id', (req, res) => {
    var id = req.params.id;
    var index = users.findIndex(user => user.id == id);
    if (index > -1){
      users.splice(index, 1);
      res.sendStatus(200);
    } else {
      res.status(404).send(`User ${id} does not exist`);
    }
  })

server.listen(3000);
