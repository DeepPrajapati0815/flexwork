const { Schema, default: mongoose } = require("mongoose");

const freelancerProfileSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "must provide title"],
    },
    description: {
      type: String,
      required: [true, "must provide description"],
    },
    image: {
      type: String,
      required: [true, "must provide image"],
      unique: true,
    },
    rate: {
      type: Number,
      required: [true, "must provide rate in hours"],
    },
    userId: {
      type: String,
      unique: true,
      required: [true, "must provide userId"],
    },
    skills: {
      type: [String],
      required: [true, "must provide skills"],
    },
  },
  { timestamps: true }
);

const FreelancerProfile = mongoose.model(
  "FreelancerProfile",
  freelancerProfileSchema
);

module.exports = FreelancerProfile;
