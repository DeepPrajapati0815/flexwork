const { Schema, default: mongoose } = require("mongoose");

const clientProposalsReceivedSchema = new Schema(
  {
    freelancerProposalId: {
      type: String,
      required: [true, "must provide Freelnacer id"],
    },

    clientId: {
      type: String,
      required: [true, "must provide client id"],
    },

    projectId: {
      type: String,
      required: [true, "must provide project id"],
    },
    isAccepted: {
      type: Boolean,
      default: false,
    },
    isRejected: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const ClientProposalReceived = mongoose.model(
  "ClientProposalReceived",
  clientProposalsReceivedSchema
);

module.exports = ClientProposalReceived;
