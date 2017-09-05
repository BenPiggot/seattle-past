const passport = require('passport');
const mongoose = require('mongoose');
const FacebookStrategy = require('passport-facebook');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
});

passport.use(new FacebookStrategy({
  clientID: keys.facebookClientId,
  clientSecret: keys.facebookSecret,
  callbackURL: '/auth/facebook/callback',
}, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id })
    if (existingUser) {
      done(null, existingUser);
    }
    else {
      const user = await new User({ googleId: profile.id }).save()
      done(null, user);
    }
  })
);

