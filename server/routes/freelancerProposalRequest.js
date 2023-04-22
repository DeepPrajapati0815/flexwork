const {
  verifyTokenAndFreelancer,
  verifyToken,
} = require("../middleware/verifyToken");
const {
  getAllProposals,
  getSingleProposal,
  createProposal,
} = require("../controller/freelancerProposalRequest");

const router = require("express").Router();

router.post("/", verifyToken, verifyTokenAndFreelancer, createProposal);
router.get("/", verifyToken, verifyTokenAndFreelancer, getAllProposals);
router.get(
  "/:proposalId",
  verifyToken,
  verifyTokenAndFreelancer,
  getSingleProposal
);

module.exports = router;
