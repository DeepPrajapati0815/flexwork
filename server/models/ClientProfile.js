const { Schema, default: mongoose } = require("mongoose");

const clientProfileSchema = new Schema(
  {
    companyName: {
      type: String,
      required: [true, "must provide companyName"],
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
    isVerified: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: String,
      unique: true,
      required: [true, "must provide userId"],
    },
  },
  { timestamps: true }
);

const ClientProfile = mongoose.model("ClientProfile", clientProfileSchema);

module.exports = ClientProfile;
