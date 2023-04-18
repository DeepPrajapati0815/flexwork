const {
  verifyTokenAndAuthorization,
  verifyToken,
} = require("../middleware/verifyToken");
const {
  createProfile,
  updateProfile,
  getProfile,
} = require("../controller/freelancer");

const router = require("express").Router();

router.post("/profile/:userId", verifyTokenAndAuthorization, createProfile);
router.put("/profile/:userId", verifyTokenAndAuthorization, updateProfile);
router.get("/profile/:profileId", verifyToken, getProfile);

module.exports = router;
