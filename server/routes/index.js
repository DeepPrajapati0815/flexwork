const router = require("express").Router();
const authRouter = require("./auth");
const userRouter = require("./user");
const freelancerProfileRouter = require("./freelancerProfile");
const freelancerExperienceRouter = require("./freelancerExperience");
const freelancerEducationRouter = require("./freelancerEducation");
const freelancerPortfolioRouter = require("./freelancerPortfolio");
const clientProfile = require("./clientProfle");
const clientProject = require("./clientProject");
const clientProposalsReceived = require("./clientProposalsReceived");
const freelancerProposalRequest = require("./freelancerProposalRequest");

// auth
router.use("/auth", authRouter);

//user
router.use("/user", userRouter);

// freelancer
router.use("/freelancer/profile", freelancerProfileRouter);
router.use("/freelancer/experience", freelancerExperienceRouter);
router.use("/freelancer/education", freelancerEducationRouter);
router.use("/freelancer/portfolio", freelancerPortfolioRouter);
router.use("/freelancer/proposal", freelancerProposalRequest);

// client
router.use("/client/profile", clientProfile);
router.use("/client/project", clientProject);
router.use("/client/proposal", clientProposalsReceived);

module.exports = router;
