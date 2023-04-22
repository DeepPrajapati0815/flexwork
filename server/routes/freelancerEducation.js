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

router.post("/:profileId", verifyToken, verifyTokenAndFreelancer, addEducation);
router.put(
  "/:educationId",
  verifyToken,
  verifyTokenAndFreelancer,
  updateEducation
);
router.delete(
  "/:educationId",
  verifyToken,
  verifyTokenAndFreelancer,
  removeEducation
);
router.get("/:profileId", verifyToken, getEducations);

module.exports = router;
