const { infoLog, errorLog, successLog } = require("../helper/logHelper");

const FreelancerPortfolio = require("../models/FreelancerPortfolio");

const addPortfolio = async (req, res) => {
  infoLog("addPortfolio entry");
  const profileId = req.params.profileId;
  const { title, file, completionDate } = req.body;

  try {
    if (!title || !file || !completionDate) {
      infoLog("addPortfolio exit");
      res.status(400).json({ isPortfolioAdded: false });
      return errorLog("Invalid Details");
    }

    const newPortfolio = new FreelancerPortfolio({
      title,
      file,
      completionDate,
      profileId,
    });

    await newPortfolio.save();

    successLog("Successfully portfolio added to Freelancer Profile!");
    infoLog("addEducation exit");
    return res.status(201).json({ isPortfolioAdded: true });
  } catch (error) {
    infoLog("addEducation exit");
    errorLog("Error While adding a portfolio to freelancer profile!");
    return res.status(500).json({ isPortfolioAdded: false });
  }
};

const updatePortfolio = async (req, res) => {
  infoLog("updatePortfolio entry");
  const portfolioId = req.params.portfolioId;

  const data = req.body;

  try {
    if (!data) {
      infoLog("updatePortfolio exit");
      res.status(400).json({ isPortfolioUpdated: false });
      return errorLog("Invalid Details");
    }

    await FreelancerPortfolio.findByIdAndUpdate(portfolioId, data, {
      new: true,
    });

    successLog("Successfully updated portfolio to Freelancer Profile!");
    infoLog("updatePortfolio exit");
    return res.status(201).json({ isPortfolioUpdated: true });
  } catch (error) {
    infoLog("updatePortfolio exit");
    errorLog("Error While updating a portfolio to freelancer profile!");
    return res.status(500).json({ isPortfolioUpdated: false });
  }
};

const removePortfolio = async (req, res) => {
  infoLog("removePortfolio entry");

  const portfolioId = req.params.portfolioId;

  try {
    await FreelancerPortfolio.findByIdAndDelete(portfolioId);

    successLog("Successfully deleted portfolio to Freelancer Profile!");
    infoLog("removePortfolio exit");
    return res.status(201).json({ isPortfolioRemoved: true });
  } catch (error) {
    infoLog("removePortfolio exit");
    errorLog("Error While deleting a portfolio to freelancer profile!");
    return res.status(500).json({ isPortfolioRemoved: false });
  }
};

const getPortfolios = async (req, res) => {
  infoLog("getPortfolios entry");

  const profileId = req.params.profileId;

  try {
    const data = await FreelancerPortfolio.find({ profileId });

    successLog("Successfully fetched portfolio of Freelancer Profile!");
    infoLog("getPortfolios exit");
    return res.status(201).json({ isPortfoliosFetched: true, data });
  } catch (error) {
    infoLog("getPortfolios exit");
    errorLog("Error While fetching a portfolio of freelancer profile!");
    return res.status(500).json({ isPortfoliosFetched: false });
  }
};

module.exports = {
  addPortfolio,
  updatePortfolio,
  removePortfolio,
  getPortfolios,
};
