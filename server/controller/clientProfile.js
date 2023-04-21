const { infoLog, errorLog, successLog } = require("../helper/logHelper");
const ClientProfile = require("../models/ClientProfile");

const createProfile = async (req, res) => {
  try {
    infoLog("createProfile entry");
    const { companyName, description, image } = req.body;

    const user = req.user;
    
    if (!companyName || !description || !image) {
      infoLog("createProfile exit");
      res.status(400).json({ isProfileCreated: false });
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
    await newClientProfile.save();

    successLog("Successfully Client Profile created!");
    infoLog("createProfile exit");
    return res.status(201).json({ isProfileCreated: true });
  } catch (error) {
    infoLog("createProfile exit");
    errorLog("Error While creating Client profile!");
    return res.status(500).json({ isProfileCreated: false });
  }
};

const updateProfile = async (req, res) => {
  try {
    infoLog("updateProfile entry");
    const data = req.body;
    const user = req.user;

    if (!data) {
      infoLog("createProfile exit");
      res.status(400).json({ isProfileUpdated: false });
      return errorLog("Invalid Details");
    }

    await ClientProfile.findOneAndUpdate(
      {
        userId: user.id,
      },
      data,
      { new: true }
    );

    successLog("Successfully Client Profile updated!");
    infoLog("updateProfile exit");
    return res.status(201).json({ isProfileUpdated: true });
  } catch (error) {
    infoLog("updateProfile exit");
    errorLog("Error While updating client profile!");
    return res.status(500).json({ isProfileUpdated: false });
  }
};

const getProfile = async (req, res) => {
  infoLog("getProfile entry");
  const profileId = req.params.profileId;
  try {
    const clientProfile = await ClientProfile.findById(profileId);
    successLog("Successfully Client Profile fetched!");
    infoLog("getProfile exit");
    return res
      .status(201)
      .json({ isProfileFetched: true, data: clientProfile });
  } catch (error) {
    infoLog("getProfile exit");
    errorLog("Error While fetching client profile!");
    return res.status(500).json({ isProfileFetched: false });
  }
};

module.exports = {
  createProfile,
  updateProfile,
  getProfile,
};
