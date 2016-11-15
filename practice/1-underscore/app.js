var _ = require('underscore');


var arr = [1,2,3,4,5];
var double = _.map(arr, el => el * 2);
console.log(double);

var nums = [1,1,1,2,2,3,4,5,6,6,6];
var unique = _.uniq(arr);
console.log(unique);

var profiles = [{
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

var emails = _.pluck(profiles, 'email');
console.log(emails);
