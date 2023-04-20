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
    res.status(400).json({ isProjectCreated: false });
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
      file: req.body?.file,
      totalProposals: req.body?.totalProposals,
      userId,
    });

    await newClientProject.save();

    successLog("Successfully project added to client Profile!");
    infoLog("createProject exit");
    return res.status(201).json({ isProjectCreated: true });
  } catch (error) {
    infoLog("createProject exit");
    errorLog("Error While adding a project to client profile!");
    return res.status(500).json({ isProjectCreated: false });
  }
};

const updateProject = async (req, res) => {
  infoLog("updateProject entry");
  const data = req.body;
  const { projectId } = req.params;

  try {
    await ClientProject.findByIdAndUpdate(projectId, data);

    successLog("Successfully project updated to client Profile!");
    infoLog("updateProject exit");
    return res.status(201).json({ isProjectUpdated: true });
  } catch (error) {
    infoLog("updateProject exit");
    errorLog("Error While updating a project to client profile!");
    return res.status(500).json({ isProjectUpdated: false });
  }
};

const getProjects = async (req, res) => {
  infoLog("getProjects entry");
  const { id: userId } = req.user;
  try {
    const userProjects = await ClientProject.find({ userId });

    successLog("Successfully fetched all projects!");
    infoLog("getProjects exit");
    return res
      .status(201)
      .json({ isProjectsFetched: true, projects: userProjects });
  } catch (error) {
    infoLog("getProjects exit");
    errorLog("Error While fetching all projects");
    return res.status(500).json({ isProjectsFetched: false });
  }
};

const getSingleProject = async (req, res) => {
  infoLog("getSingleProject entry");
  const { projectId } = req.params;
  try {
    const userProject = await ClientProject.findById(projectId);

    successLog("Successfully fetched single project!");
    infoLog("getSingleProject exit");
    return res
      .status(201)
      .json({ isProjectsFetched: true, project: userProject });
  } catch (error) {
    infoLog("getSingleProject exit");
    errorLog("Error While fetching single project");
    return res.status(500).json({ isProjectFetched: false });
  }
};

const deleteProject = async (req, res) => {
  infoLog("deleteProject entry");
  const projectId = req.params;
  try {
    await ClientProject.findByIdAndDelete(projectId);

    successLog("Successfully project deleted to client Profile!");
    infoLog("deleteProject exit");
    return res.status(201).json({ isProjectDeleted: true });
  } catch (error) {
    infoLog("deleteProject exit");
    errorLog("Error While deleting project");
    return res.status(500).json({ isProjectDeleted: false });
  }
};

module.exports = {
  createProject,
  updateProject,
  getProjects,
  getSingleProject,
  deleteProject,
};
