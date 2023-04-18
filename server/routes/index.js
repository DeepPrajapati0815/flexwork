const router = require("express").Router();
const authRouter = require("./auth");
const freelancerRouter = require("./freelancer");

router.use("/auth", authRouter);
router.use("/freelancer", freelancerRouter);

module.exports = router;
