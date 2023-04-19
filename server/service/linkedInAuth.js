const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const passport = require("passport");

passport.use(
  new LinkedInStrategy(
    {
      clientID: "776xe01694h7l0",
      clientSecret: "nTDyidTM4XjINv1V",
      callbackURL: "http://localhost:5000/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile"],
      state: true,
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      // asynchronous verification, for effect...
      process.nextTick(function () {
        // To keep the example simple, the user's LinkedIn profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the LinkedIn account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
