const { infoLog, errorLog, successLog } = require("../helper/logHelper");
const User = require("../models/User");

const updateUser = async (req, res) => {
  try {
    infoLog("updateUser entry");
    const data = req.body;
    const userId = req.params.userId;

    if (!data) {
      infoLog("updateUser exit");
      res.status(400).json({ isUserUpdated: false });
      return errorLog("Invalid Details");
    }

    await User.findByIdAndUpdate(userId, data, { new: true });

    successLog("Successfully user updated!");
    infoLog("updateUser exit");
    return res.status(201).json({ isUserUpdated: true });
  } catch (error) {
    infoLog("updateUser exit");
    errorLog("Error While updating user profile!");
    return res.status(500).json({ isUserUpdated: false });
  }
};

const getUser = async (req, res) => {
  infoLog("getUser entry");
  const userId = req.params.userId;
  try {
    const user = await User.findById(
      userId,
      "_id firstName lastName email username city state isClient authMode createdAt"
    );
    successLog("Successfully user fetched!");
    infoLog("getUser exit");
    return res.status(201).json({ isUserFetched: true, data: user });
  } catch (error) {
    infoLog("getUser exit");
    errorLog("Error While fetching user!");
    return res.status(500).json({ isUserFetched: false });
  }
};

const getUsers = async (req, res) => {
  infoLog("getUsers entry");
  const userId = req.params.userId;
  try {
    const users = await User.find(
      {},
      "_id firstName lastName email username city state isClient createdAt authMode"
    );
    successLog("Successfully users fetched!");
    infoLog("getUsers exit");
    return res.status(201).json({ isUsersFetched: true, data: users });
  } catch (error) {
    infoLog("getUsers exit");
    errorLog("Error While fetching users!");
    return res.status(500).json({ isUsesrFetched: false });
  }
};

const removeUser = async (req, res) => {
  infoLog("removeUser entry");
  const userId = req.params.userId;
  try {
    await User.findByIdAndRemove(userId);
    successLog("Successfully user removed!");
    infoLog("removeUser exit");
    return res.status(201).json({ isUserRemoved: true });
  } catch (error) {
    infoLog("removeUser exit");
    errorLog("Error While removing user!");
    return res.status(500).json({ isUserRemoved: false });
  }
};

module.exports = {
  getUser,
  updateUser,
  getUsers,
  removeUser,
};
