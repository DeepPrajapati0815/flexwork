const router = require("express").Router();

const {
  createProject,
  updateProject,
  getProjects,
  deleteProject,
  getSingleProject,
} = require("../controller/clientProject");

const {
  verifyTokenAndClient,
  verifyToken,
} = require("../middleware/verifyToken");

router.post("/", verifyToken, verifyTokenAndClient, createProject);
router.put("/:projectId", verifyToken, verifyTokenAndClient, updateProject);

// anyone can see project
router.get("/", verifyToken, getProjects);
router.get("/:projectId", verifyToken, getSingleProject);

router.delete("/:projectId", verifyToken, verifyTokenAndClient, deleteProject);

module.exports = router;
