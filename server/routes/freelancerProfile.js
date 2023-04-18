const {
  verifyTokenAndFreelancer,
  verifyToken,
} = require("../middleware/verifyToken");
const {
  createProfile,
  updateProfile,
  getProfile,
} = require("../controller/freelancer");

const router = require("express").Router();

router.post("/:userId", verifyTokenAndFreelancer, createProfile);
router.put("/:userId", verifyTokenAndFreelancer, updateProfile);
router.get("/:profileId", verifyToken, getProfile);

module.exports = router;
