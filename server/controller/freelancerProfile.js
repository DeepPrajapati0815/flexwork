const { infoLog, errorLog, successLog } = require("../helper/logHelper");
const FreelancerProfile = require("../models/FreelancerProfile");

const createProfile = async (req, res) => {
  try {
    infoLog("createProfile entry");
    const { title, description, image, rate, skills } = req.body;

    const user = req.user;

    if (!title || !description || !image || !rate || !skills) {
      infoLog("createProfile exit");
      res.status(400).json({ isProfileCreated: false, data: {} });
      return errorLog("Invalid Details");
    }

    const existProfile = await FreelancerProfile.findOne({ userId: user.id });

    if (existProfile) {
      infoLog("createProfile exit");
      res.status(400).json({ isProfileCreated: false, data: {} });
      return errorLog("Freelancer Profile already created");
    }

    const newFreelancerProfiile = new FreelancerProfile({
      title,
      description,
      image,
      rate,
      userId: user.id,
      skills,
    });
    const data = await newFreelancerProfiile.save();

    successLog("Successfully Freelancer Profile created!");
    infoLog("createProfile exit");
    return res.status(201).json({ isProfileCreated: true, data });
  } catch (error) {
    infoLog("createProfile exit");
    errorLog("Error While creating freelancer profile!");
    return res.status(500).json({ isProfileCreated: false, data: {} });
  }
};

const updateProfile = async (req, res) => {
  try {
    infoLog("updateProfile entry");

    const data = req.body;
    const { profileId } = req.params;

    if (!data) {
      infoLog("createProfile exit");
      res.status(400).json({ isProfileUpdated: false, data: {} });
      return errorLog("Invalid Details");
    }

    const updatedProfile = await FreelancerProfile.findByIdAndUpdate(
      profileId,
      data
    );

    successLog("Successfully Freelancer Profile updated!");
    infoLog("updateProfile exit");
    return res
      .status(200)
      .json({ isProfileUpdated: true, data: updatedProfile });
  } catch (error) {
    infoLog("updateProfile exit");
    errorLog("Error While updating freelancer profile!");
    return res.status(500).json({ isProfileUpdated: false, data: {} });
  }
};

const getProfile = async (req, res) => {
  infoLog("getProfile entry");
  const profileId = req.params.profileId;
  try {
    const freelancerProfile = await FreelancerProfile.findById(profileId, {});
    successLog("Successfully Freelancer Profile fetched!");
    infoLog("getProfile exit");
    return res
      .status(200)
      .json({ isProfileFetched: true, data: freelancerProfile });
  } catch (error) {
    infoLog("getProfile exit");
    errorLog("Error While fetching freelancer profile!");
    return res.status(500).json({ isProfileFetched: false, data: {} });
  }
};

module.exports = {
  createProfile,
  updateProfile,
  getProfile,
};
