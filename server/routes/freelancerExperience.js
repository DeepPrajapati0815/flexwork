const {
  verifyTokenAndFreelancer,
  verifyToken,
} = require("../middleware/verifyToken");

const {
  addExperience,
  updateExperience,
  removeExperience,
  getExperiences,
} = require("../controller/freelancerExperience");

const router = require("express").Router();

router.post(
  "/:profileId",
  verifyToken,
  verifyTokenAndFreelancer,
  addExperience
);
router.put(
  "/:experienceId",
  verifyToken,
  verifyTokenAndFreelancer,
  updateExperience
);
router.delete(
  "/:experienceId",
  verifyToken,
  verifyTokenAndFreelancer,
  removeExperience
);
router.get("/:profileId", verifyToken, getExperiences);

module.exports = router;
