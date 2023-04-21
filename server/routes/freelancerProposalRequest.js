const { verifyTokenAndFreelancer } = require("../middleware/verifyToken");
const {
  getAllProposals,
  getSingleProposal,
  createProposal,
} = require("../controller/freelancerProposalRequest");

const router = require("express").Router();

router.post("/:projectId", verifyTokenAndFreelancer, createProposal);
router.get("/", verifyTokenAndFreelancer, getAllProposals);
router.get("/:proposalId", verifyTokenAndFreelancer, getSingleProposal);

module.exports = router;