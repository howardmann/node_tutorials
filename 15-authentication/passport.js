var db = require('./db.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Create an authenticate method. Refer passport.js docs for examples not worth remembering. Note that if fail callback should say return done(null, false), if success then return done(null, user)
var authenticate = function(email, password, done){
  db.knex("users")
    .where("email", email)
    .first()
    .then(user => {
      if (!user || user.password !== password) {
        return done(null, false, {message: 'invalid email or password'});
      }
      return done(null, user)
    }, done)
};

passport.use(new LocalStrategy(authenticate));

// If successfully authenticated this will store the users id as a cookie session. This is equivalent in rails as session[:id] = user.id
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// This finds the current user from the saved cookie session. Per rails this is equivalent to @current_user = User.find(session[:id])
passport.deserializeUser(function(id, done){
  db.knex("users")
    .where("id", id)
    .first()
    .then(user => {
      return done(null, user)
    }, done)
});
