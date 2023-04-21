const { infoLog, errorLog } = require("../helper/logHelper");
const FreelancerProposalRequest = require("../models/FreelancerProposalRequest");

const createProposal = async (req, res) => {
  const { projectId } = req.params;
  const { id: freelancerId } = req.user;

  const { expectedBidRate, duration, coverLetter } = req.body;

  if (!expectedBidRate || !duration || !coverLetter || !projectId) {
    infoLog("createProposal exit");
    res.status(400).json({ isProposalCreated: false });
    return errorLog("Invalid Details");
  }

  try {
    const newFreelancerProposalRequest = new FreelancerProposalRequest({
      projectId,
      freelancerId,
      expectedBidRate,
      duration,
      coverLetter,
      portfolio: req.body?.portfolio,
    });

    await newFreelancerProposalRequest.save();

    successLog("Successfully proposal added to freelancer Profile!");
    infoLog("createProposal exit");
    return res.status(201).json({ isProposalCreated: true });
  } catch (error) {
    infoLog("createProposal exit");
    errorLog("Error While creating a proposal to freelancer side!");
    return res.status(500).json({ isProposalCreated: false });
  }
};

const getAllProposals = async (req, res) => {
  infoLog("getAllProposals entry");

  const { id: freelancerId } = req.user;
  try {
    const allProposals = await FreelancerProposalRequest.find({ freelancerId });

    successLog("Successfully fetched proposals from freelancer Profile!");
    infoLog("getAllProposals exit");
    return res
      .status(201)
      .json({ isProposalsFetched: true, proposals: allProposals });
  } catch (error) {
    infoLog("getAllProposals exit");
    errorLog("Error While fetching a proposals from freelancer side!");
    return res.status(500).json({ isProposalsFetched: false });
  }
};

const getSingleProposal = async (req, res) => {
  infoLog("getSingleProposal entry");
  const { proposalId } = req.params;
  try {
    const proposal = await FreelancerProposalRequest.findById(proposalId);

    successLog("Successfully fetched proposal from freelancer Profile!");
    infoLog("getSingleProposal exit");
    return res
      .status(201)
      .json({ isProposalFetched: true, proposal: proposal });
  } catch (error) {
    infoLog("getSingleProposal exit");
    errorLog("Error While fetching a proposal from freelancer side!");
    return res.status(500).json({ isProposalFetched: false });
  }
};

module.exports = {
  createProposal,
  getAllProposals,
  getSingleProposal,
};
