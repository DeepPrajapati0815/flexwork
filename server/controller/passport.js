const { infoLog, successLog } = require("../helper/logHelper");
const User = require("../models/User");

const loginFailed = (req, res) => {
  // console.log(req.user);
  infoLog("loginFailed entry");
  infoLog("loginFailed exit");
  return res.status(401).json({
    success: false,
    message: "failure",
  });
};

const loginSuccess = async (req, res) => {
  infoLog("loginSuccess entry");

  const provider = req.user?.provider;
  console.log("linkedin user======>", req.user);

  if (req.isAuthenticated()) {
    if (provider === "google") {
      const user = {
        firstName: req.user.name.givenName,
        lastName: req.user.name.familyName,
        email: req.user.emails[0].value,
        username: req.user.emails[0].value,
        profile: req.user.photos[0].value,
        authMode: "google",
        isClient: req.session.isClient === "true",
      };

      const isUserExist = await User.findOne({
        $or: [{ email: user.email }, { username: user.email }],
      });

      if (!isUserExist) {
        await User.create(user);
      }
    }

    if (provider === "github") {
      console.log(req.user);
      if (req.user) {
        const user = {
          firstName: null,
          lastName: null,
          username: req.user.username,
          email: null,
          profile: req.user.photos[0].value,
          authMode: "github",
          isClient: req.session.isClient === "true",
        };
        console.log(user);
        const isUserExist = await User.findOne({ username: user.username });

        if (!isUserExist) {
          await User.create(user);
        }
      }
    }

    infoLog("loginSuccess exit");
    return res.status(200).json({
      success: true,
      message: "successfully authenticated",
      user: req.user,
    });
  } else {
    infoLog("loginSuccess exit");
    return res.status(401).json({ message: "user not authenticated" });
  }
};

const logout = (req, res) => {
  infoLog("logout entry");

  // console.log("user ==> ", req.user);
  // console.log("cookies session ==> ", req.cookies);

  // if (req.user.provider === "google") {
  //   // Clear Cookie For The Google So That User Session Gets Destroyed SID OR LID
  // }

  req.logout((err) => {
    // callback function to handle errors, if any
    if (err) {
      console.error(err);
      infoLog("logout exit");
      return res.status(500).json({ message: "error whle logging out" });
    }
    successLog("successfully logged out");
    infoLog("logout exit");
    return res.status(200).json({ message: "successfuly logged out" });
  });

  // console.log("user ==> ", req.user);
  // console.log("cookies session ==> ", req.cookies);
};

module.exports = {
  loginFailed,
  loginSuccess,
  logout,
};
