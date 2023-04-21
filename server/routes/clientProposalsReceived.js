const router = require("express").Router();

const {
  getSingleProposal,
  getAllProposals,
  approveProposal,
  rejectProposal,
} = require("../controller/clientProposalsReceived");

const { verifyTokenAndClient } = require("../middleware/verifyToken");

router.get("/", verifyTokenAndClient, getAllProposals);
router.get("/:proposalId", verifyTokenAndClient, getSingleProposal);
router.put("/:proposalId", verifyTokenAndClient, approveProposal);
router.delete("/:proposalId", verifyTokenAndClient, rejectProposal);

module.exports = router;
