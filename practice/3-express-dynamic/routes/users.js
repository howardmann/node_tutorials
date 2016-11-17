var express = require('express');
var router = express.Router();

// Mock data
var users = [{
  "id": 1,
  "name": "Steve",
  "email": "staylor0@eepurl.com",
  "city": "Qingshui"
}, {
  "id": 2,
  "name": "Sarah",
  "email": "speters1@yelp.com",
  "city": "Yantal’"
}, {
  "id": 3,
  "name": "Margaret",
  "email": "mhayes2@bloglovin.com",
  "city": "Wufeng"
}, {
  "id": 4,
  "name": "Shirley",
  "email": "srogers3@indiegogo.com",
  "city": "Storuman"
}, {
  "id": 5,
  "name": "Aaron",
  "email": "asimpson4@newyorker.com",
  "city": "Nekhayevskiy"
}, {
  "id": 6,
  "name": "Willie",
  "email": "wrodriguez5@studiopress.com",
  "city": "Tonggu"
}, {
  "id": 7,
  "name": "Nancy",
  "email": "nwarren6@chicagotribune.com",
  "city": "San Pablo"
}, {
  "id": 8,
  "name": "Shirley",
  "email": "sramirez7@bizjournals.com",
  "city": "Clichy"
}, {
  "id": 9,
  "name": "Clarence",
  "email": "cchapman8@marriott.com",
  "city": "Várzea de Sintra"
}, {
  "id": 10,
  "name": "Carol",
  "email": "cfernandez9@youtube.com",
  "city": "Yurkivka"
}];

/* GET users listing. */
router
  .get('/', function(req, res, next) {
    res.render('users', {
      title: 'Users',
      users: users,
      partials: {header: '_header.hjs', footer: '_footer.hjs'}
    });
  })
  .get('/:id', function(req, res, next) {
    var id = req.params.id;
    var user = users.find(user => user.id == id);
    res.render('user', {
      title: 'User',
      user: user,
      partials: {header: '_header.hjs', footer: '_footer.hjs'}
    })
  });

module.exports = router;
