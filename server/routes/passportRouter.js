const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = process.env.CLIENT_URL;

// google routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/login/success", (req, res) => {
  console.log(req.user);
  if (req.isAuthenticated()) {
    res.status(200).json({
      success: true,
      message: "successfully authenticated",
      user: req.user,
    });
  } else {
    res.status(401).json({ message: "user not authenticated" });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/login/failed",
    successRedirect: "http://localhost:3000/",
  })
);

// linkedin routes

router.get(
  "/linkedin",
  passport.authenticate("linkedin", {
    scope: ["r_emailaddress", "r_liteprofile"],
  })
);

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/auth/login/failed",
  })
);

module.exports = router;
