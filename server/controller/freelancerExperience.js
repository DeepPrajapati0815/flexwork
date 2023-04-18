const { infoLog, errorLog, successLog } = require("../helper/logHelper");

const FreelancerExperience = require("../models/FreelancerExperience");

const addExperience = async (req, res) => {
  infoLog("addExperience entry");

  const profileId = req.params.profileId;
  const { companyName, description, role, location } = req.body;

  try {
    if (!companyName || !description || !role) {
      infoLog("addExperience exit");
      res.status(400).json({ isExperienceAdded: false });
      return errorLog("Invalid Details");
    }

    const newExperience = new FreelancerExperience({
      companyName,
      role,
      description,
      location,
      profileId,
    });

    await newExperience.save();

    successLog("Successfully experience added to Freelancer Profile!");
    infoLog("addEducation exit");
    return res.status(201).json({ isExperienceAdded: true });
  } catch (error) {
    console.log(error);
    infoLog("addEducation exit");
    errorLog("Error While adding a experience to freelancer profile!");
    return res.status(500).json({ isExperienceAdded: false });
  }
};

const updateExperience = async (req, res) => {
  infoLog("updateExperience entry");
  const experienceId = req.params.experienceId;

  const data = req.body;

  try {
    if (!data) {
      infoLog("updateExperience exit");
      res.status(400).json({ isExperienceUpdated: false });
      return errorLog("Invalid Details");
    }

    await FreelancerExperience.findByIdAndUpdate(experienceId, data, {
      new: true,
    });

    successLog("Successfully updated experience  to Freelancer Profile!");
    infoLog("updateExperience exit");
    return res.status(201).json({ isExperienceUpdated: true });
  } catch (error) {
    infoLog("updateExperience exit");
    errorLog("Error While updating a experience to freelancer profile!");
    return res.status(500).json({ isExperienceUpdated: false });
  }
};

const removeExperience = async (req, res) => {
  infoLog("removeExperience entry");

  const experienceId = req.params.experienceId;

  try {
    await FreelancerExperience.findByIdAndDelete(experienceId);

    successLog("Successfully deleted experience  to Freelancer Profile!");
    infoLog("removeExperience exit");
    return res.status(201).json({ isExperienceRemoved: true });
  } catch (error) {
    infoLog("removeExperience exit");
    errorLog("Error While deleting a experience to freelancer profile!");
    return res.status(500).json({ isExperienceRemoved: false });
  }
};

const getExperiences = async (req, res) => {
  infoLog("getExperiences entry");

  const profileId = req.params.profileId;

  try {
    const data = await FreelancerExperience.find({ profileId });

    successLog("Successfully fetched experiences of Freelancer Profile!");
    infoLog("getExperiences exit");
    return res.status(201).json({ isExperiencesFetched: true, data });
  } catch (error) {
    infoLog("getExperiences exit");
    errorLog("Error While fetching a experiences of freelancer profile!");
    return res.status(500).json({ isExperiencesFetched: false });
  }
};

module.exports = {
  addExperience,
  updateExperience,
  removeExperience,
  getExperiences,
};
