const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const passport = require("passport");

const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;

passport.use(
  new LinkedInStrategy(
    {
      clientID: "776xe01694h7l0",
      clientSecret: "nTDyidTM4XjINv1V",
      callbackURL: "http://localhost:5000/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile"],
    },
    function (accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
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
