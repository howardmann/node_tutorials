var bcrypt = require('bcrypt-nodejs');
var db = require('./db.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


// Create an authenticate method. Refer passport.js docs for examples not worth remembering. Note that if fail callback should say return done(null, false), if success then return done(null, user)

// First argument is the strategy we are creating for this passport. We can then access this strategy in our login route by calling passport.authenticate('local-login', {successRedirect: '/', failureRedirect: '/login'})

passport.use('local-login', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, email, password, done){
    db.knex("users")
      .where("email", email)
      .first()
      .then(user => {
        if (!user || !bcrypt.compareSync(password, user.password)) {
          return done(null, false, req.flash('message', 'Invalid email or password'));
        }
        return done(null, user)
      }, done)
  })
);

// Create our custom sign up method. Again we will call on this strategy as an argument in our signup route page: passport.authenticate('local-signup', {successRedirect: '/', failureRedirect: '/signup'})
passport.use('local-signup', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, email, password, done){
    db.knex("users")
      .where("email", email)
      .first()
      .then(user => {
        if (user) {
          return done(null, false, req.flash('message', 'Email taken'))
        }
        if (password !== req.body.password2) {
          return done(null, false, req.flash('message', 'Passwords do not match'))
        }

        var newUser = {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: email,
          password: bcrypt.hashSync(password)
        }

        db.knex('users')
          .insert(newUser)
          .then(ids => {
            newUser.id = ids[0];
            return done(null, newUser);
          })
      })
  })
);




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
