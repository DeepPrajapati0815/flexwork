const { Schema, default: mongoose } = require("mongoose");

const clientProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "must provide title name"],
    },
    description: {
      type: String,
      required: [true, "must provide description"],
    },
    category: {
      type: [String],
      required: [true, "must provide category date"],
      unique: true,
    },
    skills: {
      type: [String],
      required: [true, "must provide skills"],
    },
    scope: {
      type: String,
      required: [true, "must provide scope"],
    },
    duration: {
      type: String,
      required: [true, "must provide duration"],
    },
    experienceType: {
      type: String,
    },
    projectRate: {
      type: Number,
      required: [true, "must provide rate"],
    },
    file: {
      type: String,
    },
    totalProposals: {
      type: Number,
      defaut: 0,
    },
    userId: {
      type: String,
      required: [true, "must provide userId"],
    },
  },
  { timestamps: true }
);

const ClientProject = mongoose.model("ClientProject", clientProjectSchema);

module.exports = ClientProject;
