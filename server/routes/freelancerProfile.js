const {
  verifyTokenAndFreelancer,
  verifyToken,
} = require("../middleware/verifyToken");
const {
  createProfile,
  updateProfile,
  getProfile,
} = require("../controller/freelancerProfile");

const router = require("express").Router();

router.post("/", verifyToken, verifyTokenAndFreelancer, createProfile);
router.put("/:userId", verifyToken, verifyTokenAndFreelancer, updateProfile);
router.get("/:profileId", verifyToken, getProfile);

module.exports = router;
