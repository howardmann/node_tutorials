var express = require('express');

var server = express();
var staticAssets = __dirname + '/public';

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

// Example 1: using in line html style and not templates. Notice it gets messy real quick

// server
//   .get('/', (req, res) => {
//     res.send('<h1>Index page</h1><a href="/">Index</a> | <a href="/users">Users</a><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, fugit eligendi doloremque voluptatem perspiciatis illo tempora exercitationem neque eveniet quod voluptatibus dicta itaque voluptates officia. Cumque distinctio eaque, quas quis!<p><ul><li>One</li><li>Two</li><li>Three</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, voluptatum.</p>');
//   })
//   .get('/users', (req, res) => {
//     res.send(`<h1>Show page</h1><a href="/">Index</a> | <a href="/users">Users</a><ul><li>${users[0].id}</li><li>${users[0].first_name}</li><li>${users[0].gender}</li></ul><ul><li>${users[1].id}</li><li>${users[1].first_name}</li><li>${users[1].gender}</li></ul><ul><li>${users[2].id}</li><li>${users[2].first_name}</li><li>${users[2].gender}</li></ul>`);
//   })

// Example 2: using hjs template to separate concerns
// We firstly set a few middleware options with express: 1) identify where the views folder is in our directory; 2) set our view engine to be hjs (note: we do not have to require hjs template)
// Then when we get the url we use the render helper instead of send to tell express which views file we want to be rendered. The render function takes two args: 1) the file name and 2) the JSON object we want to pass through for dynamic data
// View the hjs files in views directory for an overview of hjs syntax and logic helpers
server
  .set('views', __dirname + '/views')
  .set('view engine', 'hjs')
  .use(express.static(staticAssets))
  .get('/', (req, res) => {
    // When rendering a partial we use the property partials: and pass in the header property which takes the value of the filename in this instance _header.hjs. Note that the property name header will then be rendered in the hjs file as {{> header}}
    // We also pass in the property title which we are then accessing in the header partial
    res.render('index', {
      title: 'Index page',
      partials: {header: '_header.hjs', footer: '_footer.hjs'}
    });
  })
  .get('/users', (req, res) => {
    res.render('users', {
      title: 'Users page',
      partials: {header: '_header.hjs', footer: '_footer.hjs'},
      users: users
    });
  })


server.listen(3000);
