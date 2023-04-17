const { Schema, default: mongoose } = require("mongoose");

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "must provide firstName"],
    },
    lastName: {
      type: String,
      required: [true, "must provide lastName"],
    },
    username: {
      type: String,
      required: [true, "must provide username"],
      unique: true,
    },
    city: {
      type: String,
      required: [true, "must provide city"],
    },
    state: {
      type: String,
      required: [true, "must provide state"],
    },
    email: {
      type: String,
      lowercase: true,
      validate: [validateEmail, "Please fill a valid email address"],
      required: [true, "must provide email"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isClient: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
