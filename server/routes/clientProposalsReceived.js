const router = require("express").Router();

const {
  getSingleProposal,
  getAllProposals,
  approveProposal,
  rejectProposal,
} = require("../controller/clientProposalsReceived");

const {
  verifyTokenAndClient,
  verifyToken,
} = require("../middleware/verifyToken");

router.get("/", verifyToken, verifyTokenAndClient, getAllProposals);
router.get(
  "/:proposalId",
  verifyToken,
  verifyTokenAndClient,
  getSingleProposal
);
router.put("/:proposalId", verifyToken, verifyTokenAndClient, approveProposal);
router.delete(
  "/:proposalId",
  verifyToken,
  verifyTokenAndClient,
  rejectProposal
);

module.exports = router;
