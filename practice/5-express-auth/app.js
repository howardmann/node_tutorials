var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var passport = require('passport');
var flash    = require('connect-flash');
var hbs = require('express-handlebars');


// Require routes
var index = require('./routes/index');
var users = require('./routes/users');
var authRoutes = require('./routes/auth');
var pagesRoutes = require('./routes/pages');

var app = express();

// ====EXPRESS-HANDLEBARS VIEW TEMPLATE=======
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ======PASSPORT AND SESSIONS MIDDLEWARE========
app.use(session({secret: "i love dogs", resave: false, saveUnitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(session());

// ===Custom setting res.locals to objects accessible across all views. Best apply this to our application.layout file. Remember to put after session
app.use(function (req, res, next) {
   res.locals = {
     user: req.isAuthenticated(),
     message: req.flash('message'),
     saved: req.user
   };
   next();
});


app.use(cookieParser());

// ======SASS MIDDLEWARE========
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  debug: true,
  outputStyle: 'compressed'
}));

app.use(express.static(path.join(__dirname, 'public')));

// =====ROUTES DIR MIDDLEWARE========
app.use('/', index);
app.use('/users', users);
app.use(authRoutes);
app.use(pagesRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
