const passport = require('passport');
const mongoose = require('mongoose');
const FacebookStrategy = require('passport-facebook');
const TwitterStrategy = require('passport-twitter');
const InstagramStrategy = require('passport-instagram');
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
  profileFields : ['id', 'name', 'displayName', 'emails', 'picture'],
  proxy: true
}, async (accessToken, refreshToken, profile, done) => {
  console.log(profile)
    const existingUser = await User.findOne({ facebookId: profile.id })
    const avatar = profile.photos[0] && profile.photos[0].value ? profile.photos[0].value : '';
    if (existingUser) {
      done(null, existingUser);
    }
    else {
      const user = await new User({ 
        facebookId: profile.id, 
        username: profile.displayName,
        avatar: avatar
       }).save()
      done(null, user);
    }
  })
);

passport.use(new TwitterStrategy({
  consumerKey: keys.twitterConsumerKey,
  consumerSecret: keys.twitterConsumerSecret,
  callbackURL: '/auth/twitter/callback'
}, async (req, token, tokenSecret, profile, done) => {
    console.log(profile)
    const existingUser = await User.findOne({ twitterId: profile.id })
    if (existingUser) {
      done(null, existingUser);
    }
    else {
      const user = await new User({ 
        twitterId: profile.id, 
        username: profile.displayName,
        avatar: profile.profile_image_url_https
       }).save()
      done(null, user);
    }
  })
);

passport.use(new InstagramStrategy({
  clientID: keys.instagramClientId,
  clientSecret: keys.instagramClientSecret,
  callbackURL: '/auth/instagram/callback'
}, async (accessToken, refreshToken, profile, done) => {
    console.log(profile)
    const existingUser = await User.findOne({ instagramId: profile.id })
    if (existingUser) {
      done(null, existingUser);
    }
    else {
      const user = await new User({ 
        instagramId: profile.id, 
        username: profile.username,
        avatar: ''
       }).save()
      done(null, user);
    }
  })
);


