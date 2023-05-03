const { infoLog, errorLog, successLog } = require("../helper/logHelper");
const FreelancerProposalRequest = require("../models/FreelancerProposalRequest");
const User = require("../models/User");

const getAllProposals = async (req, res) => {
  infoLog("getAllProposals entry");
  const { id: projectId, limit } = req.query;
  const { id: clientId } = req.user;
  try {
    let clientAllProposals = [];
    let freelancers = [];
    let userIds = [];

    if (limit == "true") {
      clientAllProposals = await FreelancerProposalRequest.find({
        $and: [{ projectId: projectId }, { clientId: clientId }],
        $or: [{ status: "Pending" }, { status: "Accepted" }],
      })
        .limit(5)
        .sort({ createdAt: -1 });
      userIds = clientAllProposals.map((proposal) => proposal.freelancerId);

      freelancers = await User.find({ _id: { $in: userIds } });
    } else {
      clientAllProposals = await FreelancerProposalRequest.find({
        $and: [{ projectId: projectId }, { clientId: clientId }],
        $or: [{ status: "Pending" }, { status: "Accepted" }],
      });

      userIds = clientAllProposals.map((proposal) => proposal.freelancerId);

      freelancers = await User.find({ _id: { $in: userIds } });
    }

    successLog("Successfully fetched all proposals!");
    infoLog("getAllProposals exit");
    return res.status(200).json({
      isProposalsFetched: true,
      data: { clientAllProposals, freelancers },
    });
  } catch (error) {
    console.log(error.message);
    infoLog("getProjects exit");
    errorLog("Error While fetching all proposals");
    return res.status(500).json({ isProposalsFetched: false, data: {} });
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
      .status(200)
      .json({ isProposalsFetched: true, data: clientProposal });
  } catch (error) {
    infoLog("getSingleProposal exit");
    errorLog("Error While fetching single proposals");
    return res.status(500).json({ isProposalFetched: false, data: {} });
  }
};
const approveProposal = async (req, res) => {
  infoLog("approveProposal entry");
  const { proposalId } = req.params;
  const { id: projectId } = req.query;
  try {
    const approvedProposal = await FreelancerProposalRequest.findByIdAndUpdate(
      proposalId,
      {
        status: "Accepted",
      },
      { new: true }
    );
    // after approving a proposal find all the freelancer who bid in this project

    const restFreelancerBids = await FreelancerProposalRequest.find({
      $and: [{ projectId: projectId }, { _id: { $ne: proposalId } }],
    });
    // console.log(restFreelancerBids.map((a) => a.id).filter(Boolean));

    let rejectedProposal = restFreelancerBids.map((a) => a.id).filter(Boolean);

    await FreelancerProposalRequest.updateMany(
      {
        $and: [{ projectId: projectId }, { _id: { $ne: proposalId } }],
      },
      { status: "Rejected" }
    );

    successLog("Successfully approved single proposal!");
    infoLog("approveProposal exit");
    return res.status(200).json({
      isProposalsApproved: true,
      data: approvedProposal,
      // restFreelancers: restFreelancerIds,
    });
  } catch (error) {
    console.log(error);
    infoLog("approveProposal exit");
    errorLog("Error While approving single proposal");
    return res.status(500).json({ isProposalApproved: false, data: {} });
  }
};

const rejectProposal = async (req, res) => {
  infoLog("rejectProposal entry");
  const { proposalId } = req.params;
  try {
    const rejectProposal = await FreelancerProposalRequest.findByIdAndUpdate(
      proposalId,
      {
        status: "Rejected",
      }
    );
    successLog("Successfully rejected single proposal!");
    infoLog("rejectProposal exit");
    return res
      .status(200)
      .json({ isProposalRejected: true, data: rejectProposal });
  } catch (error) {
    infoLog("rejectProposal exit");
    errorLog("Error While rejecting single proposal");
    return res.status(500).json({ isProposalRejected: false, data: {} });
  }
};

const deleteProposal = async (req, res) => {
  infoLog("deleteProposal entry");
  const { proposalId } = req.params;
  try {
    const deleteProposal = await FreelancerProposalRequest.findByIdAndDelete(
      proposalId
    );
    successLog("Successfully deleted single proposal!");
    infoLog("deleteProposal exit");
    return res
      .status(200)
      .json({ isProposalDeleted: true, data: deleteProposal });
  } catch (error) {
    infoLog("deleteProposal exit");
    errorLog("Error While deleting single proposal");
    return res.status(500).json({ isProposalDeleted: false, data: {} });
  }
};

module.exports = {
  getAllProposals,
  getSingleProposal,
  approveProposal,
  rejectProposal,
  deleteProposal,
};
