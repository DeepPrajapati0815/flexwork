const { Schema, default: mongoose } = require("mongoose");

const freelancerPortfolioSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "must provide title"],
    },
    file: {
      type: String,
      required: [true, "must provide portfolio file"],
    },
    completionDate: {
      type: Date,
      required: [true, "must provide completion date"],
      unique: true,
    },
    profileId: {
      type: String,
      unique: true,
      required: [true, "must provide freelancer profileId"],
    },
  },
  { timestamps: true }
);

const FreelancerPortfolio = mongoose.model(
  "FreelancerPortfolio",
  freelancerPortfolioSchema
);

module.exports = FreelancerPortfolio;
