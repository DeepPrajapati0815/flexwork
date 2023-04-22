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

router.post("/", verifyTokenAndFreelancer, addPortfolio);
router.put("/:portfolioId", verifyTokenAndFreelancer, updatePortfolio);
router.delete("/:portfolioId", verifyTokenAndFreelancer, removePortfolio);
router.get("/", verifyToken, getPortfolios);

module.exports = router;
