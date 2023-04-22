const {
  verifyTokenAndFreelancer,
  verifyToken,
} = require("../middleware/verifyToken");

const {
  addPortfolio,
  updatePortfolio,
  removePortfolio,
  getPortfolios,
} = require("../controller/freelancerPortfolio");

const router = require("express").Router();

router.post("/:profileId", verifyToken, verifyTokenAndFreelancer, addPortfolio);
router.put(
  "/:portfolioId",
  verifyToken,
  verifyTokenAndFreelancer,
  updatePortfolio
);
router.delete(
  "/:portfolioId",
  verifyToken,
  verifyTokenAndFreelancer,
  removePortfolio
);
router.get("/:profileId", verifyToken, getPortfolios);

module.exports = router;
