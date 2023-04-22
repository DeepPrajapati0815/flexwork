const { infoLog, errorLog, successLog } = require("../helper/logHelper");
const ClientProfile = require("../models/ClientProfile");

const createProfile = async (req, res) => {
  try {
    infoLog("createProfile entry");
    const { companyName, description, image } = req.body;

    const user = req.user;

    if (!companyName || !description || !image) {
      infoLog("createProfile exit");
      res.status(400).json({ isProfileCreated: false, data: {} });
      return errorLog("Invalid Details");
    }

    const existProfile = await ClientProfile.findOne({ userId: user.id });

    if (existProfile) {
      infoLog("createProfile exit");
      res.status(400).json({ isProfileCreated: false });
      return errorLog("Client Profile already created");
    }

    const newClientProfile = new ClientProfile({
      companyName,
      description,
      image,
      userId: user.id,
    });
    const data = await newClientProfile.save();

    successLog("Successfully Client Profile created!");
    infoLog("createProfile exit");
    return res.status(201).json({ isProfileCreated: true, data });
  } catch (error) {
    infoLog("createProfile exit");
    errorLog("Error While creating Client profile!");
    return res.status(500).json({ isProfileCreated: false, data: {} });
  }
};

const updateProfile = async (req, res) => {
  try {
    infoLog("updateProfile entry");
    const data = req.body;
    const { userId } = req.params;

    if (!data) {
      infoLog("createProfile exit");
      res.status(400).json({ isProfileUpdated: false, data: {} });
      return errorLog("Invalid Details");
    }

    const updatedProfile = await ClientProfile.findOneAndUpdate(
      { userId: userId },
      data,
      { new: true }
    );

    successLog("Successfully Client Profile updated!");
    infoLog("updateProfile exit");
    return res
      .status(200)
      .json({ isProfileUpdated: true, data: updatedProfile });
  } catch (error) {
    infoLog("updateProfile exit");
    errorLog("Error While updating client profile!");
    return res.status(500).json({ isProfileUpdated: false, data: {} });
  }
};

const getProfile = async (req, res) => {
  infoLog("getProfile entry");
  const { userId } = req.params;
  try {
    const clientProfile = await ClientProfile.findOne({ userId: userId });
    successLog("Successfully Client Profile fetched!");
    infoLog("getProfile exit");
    return res
      .status(200)
      .json({ isProfileFetched: true, data: clientProfile });
  } catch (error) {
    infoLog("getProfile exit");
    errorLog("Error While fetching client profile!");
    return res.status(500).json({ isProfileFetched: false, data: {} });
  }
};

module.exports = {
  createProfile,
  updateProfile,
  getProfile,
};
