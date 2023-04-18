const { infoLog, errorLog, successLog } = require("../helper/logHelper");

const FreelancerEducation = require("../models/FreelancerEducation");

const addEducation = async (req, res) => {
  infoLog("addEducation entry");
  const profileId = req.params.profileId;
  const { universityName, course, completionDate } = req.body;

  try {
    if (!universityName || !course || !profileId || !completionDate) {
      infoLog("addEducation exit");
      res.status(400).json({ isEducationAdded: false });
      return errorLog("Invalid Details");
    }

    const newEducation = new FreelancerEducation({
      universityName,
      course,
      completionDate,
      profileId,
    });

    await newEducation.save();

    successLog("Successfully education added to Freelancer Profile!");
    infoLog("addEducation exit");
    return res.status(201).json({ isEducationAdded: true });
  } catch (error) {
    infoLog("addEducation exit");
    errorLog("Error While adding a Education to freelancer profile!");
    return res.status(500).json({ isEducationAdded: false });
  }
};

const updateEducation = async (req, res) => {
  infoLog("updateEducation entry");
  const educationId = req.params.educationId;

  const data = req.body;

  try {
    if (!data) {
      infoLog("updateEducation exit");
      res.status(400).json({ isEducationUpdated: false });
      return errorLog("Invalid Details");
    }

    await FreelancerEducation.findByIdAndUpdate(educationId, data, {
      new: true,
    });

    successLog("Successfully updated education  to Freelancer Profile!");
    infoLog("updateEducation exit");
    return res.status(201).json({ isEducationUpdated: true });
  } catch (error) {
    infoLog("updateEducation exit");
    errorLog("Error While updating a Education to freelancer profile!");
    return res.status(500).json({ isEducationUpdated: false });
  }
};

const removeEducation = async (req, res) => {
  infoLog("removeEducation entry");

  const educationId = req.params.educationId;

  try {
    await FreelancerEducation.findByIdAndDelete(educationId);

    successLog("Successfully deleted education  to Freelancer Profile!");
    infoLog("removeEducation exit");
    return res.status(201).json({ isEducationRemoved: true });
  } catch (error) {
    infoLog("removeEducation exit");
    errorLog("Error While deleting a Education to freelancer profile!");
    return res.status(500).json({ isEducationRemoved: false });
  }
};

const getEducations = async (req, res) => {
  infoLog("getEducations entry");

  const profileId = req.params.profileId;

  try {
    const data = await FreelancerEducation.find({ profileId });

    successLog("Successfully fetched education of Freelancer Profile!");
    infoLog("getEducations exit");
    return res.status(201).json({ isEducationsFetched: true, data });
  } catch (error) {
    infoLog("getEducations exit");
    errorLog("Error While fetching a Education of freelancer profile!");
    return res.status(500).json({ isEducationsFetched: false });
  }
};

module.exports = {
  addEducation,
  updateEducation,
  removeEducation,
  getEducations,
};
