const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "307284311912-itjp3mau9q780gvn15s6m7ffc4nv058n.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
