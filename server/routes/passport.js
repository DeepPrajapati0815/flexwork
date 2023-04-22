const router = require("express").Router();
const passport = require("passport");
const { loginFailed, loginSuccess, logout } = require("../controller/passport");
const User = require("../models/User");

const CLIENT_URL = process.env.CLIENT_URL;

// Login Related Routes

router.get("/login/failed", loginFailed);

router.get("/login/success", loginSuccess);

router.get("/logout", logout);

// Google Routes

router.get(
  "/google",
  (req, res, next) => {
    req.session.isClient = req.query.isClient;
    req.session.isFirstTime = req.query.isFirstTime;
    console.log(req.query);
    console.log("session================>", req.session);
    next();
  },
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/login/failed",
    successRedirect: "http://localhost:3000?isSuccess=true&isClient=true",
  })
);

// Linkedin Routes

router.get(
  "/linkedin",
  passport.authenticate("linkedin", {
    scope: ["r_emailaddress", "r_liteprofile"],
    state: "",
  })
);

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    failureRedirect: "/auth/login/failed",
    successRedirect: "http://localhost:3000",
  })
  // async (req, res) => {
  //   if (req.user) {
  //     const user = {
  //       firstName: req.user.name.givenName,
  //       lastName: req.user.name.familyName,
  //       username: req.user.emails[0].value,
  //       profile: req.user.photos[req.user.photos.length - 1].value,
  //       email: req.user.emails[0].value,
  //       authMode: "linkedin",
  //       isClient: req.session.isClient === "true",
  //     };
  //     console.log("user session=======>", req.session);
  //     const isUserExist = await User.findOne({
  //       $or: [{ email: user.email }, { username: user.email }],
  //     });
  //     console.log(user);
  //     // console.log(isUserExist);
  //     // if (!isUserExist) {
  //     //   const newUser = await User.create(user);
  //     //   console.log(newUser);
  //     // }
  //   }

  //   res.redirect("http://localhost:3000");
  // }
);

// GitHub Routes

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://localhost:3000?isSuccess=true",
    failureRedirect: "/auth/login/failed",
  })
);

module.exports = router;
