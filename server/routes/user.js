const router = require("express").Router();
const { getUser, updateUser, deleteUser } = require("../controller/user");
const { verifyTokenAndUser } = require("../middleware/verifyToken");

router.get("/:userId", verifyTokenAndUser, getUser);
router.put("/:userId", verifyTokenAndUser, updateUser);
router.delete("/:userId", verifyTokenAndUser, deleteUser);

module.exports = router;
