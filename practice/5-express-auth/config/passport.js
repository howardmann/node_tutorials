var bcrypt = require('bcrypt-nodejs');
var knex = require('./db.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// ==========USER LOGIN AUTHENTICATION===========
passport.use('local-login', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {
    knex("users")
      .where("email", username)
      .first()
      .then(user => {
        if (!user || !bcrypt.compareSync(password, user.password)){
          return done(null, false, req.flash('message', 'Invalid email or password'));
        }
        return done(null, user, req.flash('message', 'Succesfully logged in'))
      }, done)
  }
));

// ==========USER SIGN UP AND HASH PASSWORD===========
passport.use('local-signup', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {
    knex("users")
      .where("email", username)
      .first()
      .then(user => {
        if (user){
          return done(null, false, req.flash('message', 'Email taken'));
        }
        if (password !== req.body.password2) {
          return done(null, false, req.flash('message', 'Passwords do not match'));
        }

        var newUser = {
          email: username,
          password: bcrypt.hashSync(password),
          name: req.body.name
        };

        knex("users")
          .insert(newUser)
          .then(ids => {
            newUser.id = ids[0];
            return done(null, newUser, req.flash('message', 'Succesfully created'));
          }, done)
      }, done)
  }
));



passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  knex("users")
    .where("id", id)
    .first()
    .then(user => {
      return done(null, user)
    }, done)
});
