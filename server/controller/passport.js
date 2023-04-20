const { infoLog, successLog } = require("../helper/logHelper");

const loginFailed = (req, res) => {
  console.log(req.user);
  infoLog("loginFailed entry");
  infoLog("loginFailed exit");
  return res.status(401).json({
    success: false,
    message: "failure",
  });
};

const loginSuccess = (req, res) => {
  infoLog("loginSuccess entry");

  console.log(req.user);
  // console.log("user ==> ", req.user);

  if (req.isAuthenticated()) {
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

  console.log("user ==> ", req.user);
  console.log("cookies session ==> ", req.cookies);

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

  console.log("user ==> ", req.user);
  console.log("cookies session ==> ", req.cookies);
};

module.exports = {
  loginFailed,
  loginSuccess,
  logout,
};
