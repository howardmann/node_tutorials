var express = require('express');
var router = express.Router();

// Dummy json data
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
}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    title: 'Users page',
    partials: {header: '_header.hjs'},
    users: users
  });
});

module.exports = router;
