const { infoLog, errorLog, successLog } = require("../helper/logHelper");
const FreelancerProposalRequest = require("../models/FreelancerProposalRequest");

const getAllProposals = async (req, res) => {
  infoLog("getAllProposals entry");
  const { id: projectId } = req.query;
  const { id: clientId } = req.user;
  try {
    const clientAllProposals = await FreelancerProposalRequest.find({
      $and: [{ projectId: projectId }, { clientId: clientId }],
    });

    successLog("Successfully fetched all proposals!");
    infoLog("getAllProposals exit");
    return res
      .status(201)
      .json({ isProposalsFetched: true, proposals: clientAllProposals });
  } catch (error) {
    infoLog("getProjects exit");
    errorLog("Error While fetching all proposals");
    return res.status(500).json({ isProposalsFetched: false });
  }
};

const getSingleProposal = async (req, res) => {
  infoLog("getSingleProposal entry");
  const { proposalId } = req.params;
  try {
    const clientProposal = await FreelancerProposalRequest.findById(proposalId);

    successLog("Successfully fetched single proposal!");
    infoLog("getSingleProposal exit");
    return res
      .status(201)
      .json({ isProposalsFetched: true, proposal: clientProposal });
  } catch (error) {
    infoLog("getSingleProposal exit");
    errorLog("Error While fetching single proposals");
    return res.status(500).json({ isProposalFetched: false });
  }
};
const approveProposal = async (req, res) => {
  infoLog("approveProposal entry");
  const { proposalId } = req.params;
  try {
    await FreelancerProposalRequest.findByIdAndUpdate(proposalId, {
      isAccepted: true,
    });
    successLog("Successfully approved single proposal!");
    infoLog("approveProposal exit");
    return res.status(201).json({ isProposalsApproved: true });
  } catch (error) {
    infoLog("approveProposal exit");
    errorLog("Error While approving single proposal");
    return res.status(500).json({ isProposalApproved: false });
  }
};

const rejectProposal = async (req, res) => {
  infoLog("rejectProposal entry");
  const { proposalId } = req.params;
  try {
    await FreelancerProposalRequest.findByIdAndUpdate(proposalId, {
      isRejected: true,
    });
    successLog("Successfully rejected single proposal!");
    infoLog("rejectProposal exit");
    return res.status(201).json({ isProposalRejected: true });
  } catch (error) {
    infoLog("rejectProposal exit");
    errorLog("Error While rejecting single proposal");
    return res.status(500).json({ isProposalRejected: false });
  }
};

module.exports = {
  getAllProposals,
  getSingleProposal,
  approveProposal,
  rejectProposal,
};
