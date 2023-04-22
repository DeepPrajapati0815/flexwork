const {
  verifyTokenAndFreelancer,
  verifyToken,
} = require("../middleware/verifyToken");

const {
  addEducation,
  updateEducation,
  removeEducation,
  getEducations,
} = require("../controller/freelancerEducation");

const router = require("express").Router();

router.post("/", verifyTokenAndFreelancer, addEducation);
router.put("/:educationId", verifyTokenAndFreelancer, updateEducation);
router.delete("/:educationId", verifyTokenAndFreelancer, removeEducation);
router.get("/", verifyToken, getEducations);

module.exports = router;
