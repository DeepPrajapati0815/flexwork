const { infoLog, errorLog, successLog } = require("../helper/logHelper");
const ClientProject = require("../models/ClientProject");

const createProject = async (req, res) => {
  infoLog("createProject entry");

  const { title, description, category, skills, scope, duration, projectRate } =
    req.body;

  const { id: userId } = req.user;

  if (
    !title ||
    !description ||
    !category ||
    !skills ||
    !scope ||
    !duration ||
    !projectRate
  ) {
    infoLog("createProject exit");
    res.status(400).json({ isProjectCreated: false, data: {} });
    return errorLog("Invalid Details");
  }

  try {
    const newClientProject = new ClientProject({
      title,
      description,
      category,
      skills,
      scope,
      experienceType: req.body?.experienceType,
      duration,
      projectRate,
      file: req.body?.file || null,
      totalProposals: req.body?.totalProposals,
      userId,
    });

    const data = await newClientProject.save();

    successLog("Successfully project added to client Profile!");
    infoLog("createProject exit");
    return res.status(201).json({ isProjectCreated: true, data });
  } catch (error) {
    console.log(error);
    infoLog("createProject exit");
    errorLog("Error While adding a project to client profile!");
    return res.status(500).json({ isProjectCreated: false, data: {} });
  }
};

const updateProject = async (req, res) => {
  infoLog("updateProject entry");
  const data = req.body;
  const { projectId } = req.params;

  if (!data) {
    infoLog("updateProject exit");
    res.status(400).json({ isProjectUpdated: false, data: {} });
    return errorLog("Invalid Details");
  }

  try {
    const updatedProject = await ClientProject.findByIdAndUpdate(
      projectId,
      data,
      { new: true }
    );

    successLog("Successfully project updated to client Profile!");
    infoLog("updateProject exit");
    return res
      .status(200)
      .json({ isProjectUpdated: true, data: updatedProject });
  } catch (error) {
    infoLog("updateProject exit");
    errorLog("Error While updating a project to client profile!");
    return res.status(500).json({ isProjectUpdated: false, data: {} });
  }
};

// show only latest 5 project to freelancer but client can view all the project which he created

const getProjects = async (req, res) => {
  infoLog("getProjects entry");

  const { id: userId } = req.query;

  const { isClient } = req.user;

  let projects = [];

  try {
    // fetch all the projects
    if (isClient) {
      projects = await ClientProject.find({ userId }).sort({ createdAt: -1 });
    } else {
      projects = await ClientProject.find({ userId })
        .sort({ createdAt: -1 })
        .limit(5);
    }

    successLog("Successfully fetched all projects!");
    infoLog("getProjects exit");
    return res.status(200).json({ isProjectsFetched: true, data: projects });
  } catch (error) {
    infoLog("getProjects exit");
    errorLog("Error While fetching all projects");
    return res.status(500).json({ isProjectsFetched: false, data: {} });
  }
};

const getSingleProject = async (req, res) => {
  infoLog("getSingleProject entry");
  const { projectId } = req.params;
  try {
    const userProject = await ClientProject.findById(projectId);

    successLog("Successfully fetched single project!");
    infoLog("getSingleProject exit");
    return res.status(200).json({ isProjectsFetched: true, data: userProject });
  } catch (error) {
    infoLog("getSingleProject exit");
    errorLog("Error While fetching single project");
    return res.status(500).json({ isProjectFetched: false, data: {} });
  }
};

const deleteProject = async (req, res) => {
  infoLog("deleteProject entry");
  const { projectId } = req.params;
  try {
    const deletedProject = await ClientProject.findByIdAndDelete(projectId);

    successLog("Successfully project deleted to client Profile!");
    infoLog("deleteProject exit");
    return res
      .status(200)
      .json({ isProjectDeleted: true, data: deletedProject });
  } catch (error) {
    infoLog("deleteProject exit");
    errorLog("Error While deleting project");
    return res.status(500).json({ isProjectDeleted: false, data: {} });
  }
};

module.exports = {
  createProject,
  updateProject,
  getProjects,
  getSingleProject,
  deleteProject,
};
