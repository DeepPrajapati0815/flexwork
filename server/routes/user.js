const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middleware/verifyToken");

const {
  updateUser,
  removeUser,
  getUser,
  getUsers,
} = require("../controller/user");

const router = require("express").Router();

router.put("/:userId", verifyToken, verifyTokenAndAuthorization, updateUser);
router.delete("/:userId", verifyToken, verifyTokenAndAuthorization, removeUser);
router.get("/:userId", verifyToken, getUser);
router.get("/", verifyToken, getUsers);

module.exports = router;
