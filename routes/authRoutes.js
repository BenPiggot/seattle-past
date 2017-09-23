const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
  }));

  app.get('/auth/facebook/callback', 
    passport.authenticate('facebook'), 
    (req, res) => {
      res.redirect('/map')
    }
  );

  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get('/auth/twitter/callback', 
    passport.authenticate('twitter'),
    (req, res) => {
      res.redirect('/map')
    }
  )

  app.get('/auth/instagram', passport.authenticate('instagram'));

  app.get('/auth/instagram/callback', 
    passport.authenticate('instagram'),
    (req, res) => {
      res.redirect('/map')
    }
  )

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })
}