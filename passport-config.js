const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');
const User = require('../models/user');

passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: 'https://accounts.google.com/o/oauth2/auth',
      tokenURL: 'https://www.googleapis.com/oauth2/v4/token',
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3001/auth/google/callback'
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id, function (err, user) {
    done(err, user);
  });
});

module.exports = passport;

