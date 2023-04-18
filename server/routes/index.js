const router = require("express").Router();
const authRouter = require("./auth");
const freelancerProfileRouter = require("./freelancerProfile");
const freelancerExperienceRouter = require("./freelancerExperience");
const freelancerEducationRouter = require("./freelancerEducation");

// auth
router.use("/auth", authRouter);

// freelancer
router.use("/freelancer/profile", freelancerProfileRouter);
router.use("/freelancer/experience", freelancerExperienceRouter);
router.use("/freelancer/education", freelancerEducationRouter);

module.exports = router;
