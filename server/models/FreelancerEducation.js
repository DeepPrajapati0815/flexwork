const { Schema, default: mongoose } = require("mongoose");

const freelancerEducationSchema = new Schema(
  {
    universityName: {
      type: String,
      required: [true, "must provide university name"],
    },
    course: {
      type: String,
      required: [true, "must provide course name"],
    },
    completionDate: {
      type: Date,
      required: [true, "must provide completion date"],
      unique: true,
    },
    profileId: {
      type: String,
      required: [true, "must provide freelancer profileId"],
    },
  },
  { timestamps: true }
);

const FreelancerEducation = mongoose.model(
  "FreelancerEducation",
  freelancerEducationSchema
);

module.exports = FreelancerEducation;
