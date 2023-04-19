const router = require("express").Router();
const passport = require("passport");
const { loginFailed, loginSuccess, logout } = require("../controller/passport");

const CLIENT_URL = process.env.CLIENT_URL;

// Login Related Routes

router.get("/login/failed", loginFailed);

router.get("/login/success", loginSuccess);

router.get("/logout", logout);

// Google Routes

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/login/failed",
    successRedirect: "http://localhost:3000",
  })
);

// Linkedin Routes

router.get(
  "/linkedin",
  passport.authenticate("linkedin", {
    scope: ["r_emailaddress", "r_liteprofile"],
  })
);

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/auth/login/failed",
  })
);

// GitHub Routes

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/auth/login/failed",
  })
);

module.exports = router;
