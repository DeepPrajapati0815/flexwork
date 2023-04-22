const { infoLog, errorLog, successLog } = require("../helper/logHelper");
const User = require("../models/User");

const getUser = async (req, res) => {
  infoLog("getUser entry");

  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    successLog("Successfully fetched user!");
    infoLog("getUser exit");
    return res.status(200).json({ isUserFetched: true, user: user });
  } catch (error) {
    infoLog("getUser exit");
    errorLog("Error While fetching user!");
    return res.status(500).json({ isUserFetched: false });
  }
};

const updateUser = async (req, res) => {
  infoLog("updateUser entry");

  const { userId } = req.params;
  const data = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, data, {
      new: true,
    });

    successLog("Successfully updated user!");
    infoLog("updateUser exit");
    return res.status(200).json({ isUserFetched: true, user: updatedUser });
  } catch (error) {
    infoLog("updateUser exit");
    errorLog("Error While updating user!");
    return res.status(500).json({ isUserUpdated: false });
  }
};

const deleteUser = async (req, res) => {
  infoLog("deleteUser entry");

  const { userId } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    successLog("Successfully deleted user!");
    infoLog("deleteUser exit");
    return res.status(200).json({ isUserDeleted: true, user: deletedUser });
  } catch (error) {
    infoLog("deleteUser exit");
    errorLog("Error While deleting user!");
    return res.status(500).json({ isUserDeleted: false });
  }
};

module.exports = {
  getUser,
  updateUser,
  deleteUser,
};
