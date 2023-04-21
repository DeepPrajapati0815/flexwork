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

router.post("/", verifyTokenAndClient, createProject);
router.put("/:projectId", verifyTokenAndClient, updateProject);
router.get("/", verifyToken, getProjects);
router.get("/:projectId", verifyToken, getSingleProject);
router.delete("/:projectId", verifyTokenAndClient, deleteProject);

module.exports = router;
