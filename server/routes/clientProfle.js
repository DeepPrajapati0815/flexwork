const {
  verifyToken,
  verifyTokenAndClient,
} = require("../middleware/verifyToken");
const {
  createProfile,
  updateProfile,
  getProfile,
} = require("../controller/clientProfile");

const router = require("express").Router();

router.post("/", verifyToken, verifyTokenAndClient, createProfile);
router.put("/:userId", verifyToken, verifyTokenAndClient, updateProfile);
router.get("/:profileId", verifyToken, getProfile);

module.exports = router;
