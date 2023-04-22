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

router.put("/:userId", verifyTokenAndAuthorization, updateUser);
router.delete("/:userId", verifyTokenAndAuthorization, removeUser);
router.get("/:userId", verifyToken, getUser);
router.get("/", verifyToken, getUsers);

module.exports = router;
