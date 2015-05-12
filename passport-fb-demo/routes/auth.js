var express = require('express');
var router = express.Router();

//var FACEBOOK_APP_ID = "--insert-facebook-app-id-here--";
//var FACEBOOK_APP_SECRET = "--insert-facebook-app-secret-here--";
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

var FACEBOOK_APP_ID = "438618766314794";
var FACEBOOK_APP_SECRET = "8693afaf6694e37945df2aadc8530db5";

// Use the FacebookStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Facebook
//   profile), and invoke a callback with a user object.
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:1337/auth/facebook/callback"
},
  function (accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
        
        // To keep the example simple, the user's Facebook profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the Facebook account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
    });
}
));


router.get('/facebook', passport.authenticate('facebook'), function (req, res) {
    // The request will be redirected to Facebook for authentication, so this
    // function will not be called.    
})
.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function (req, res) {
    res.redirect('/#/dashboard');
})

module.exports = router;