const mongoose = require("mongoose");
const psychiatristSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    hospital_name: { type: String, required: true },
    number: { type: Number, required: false,},
    pincode: { type: Number, required: false, },
    state: { type: String, required: false,},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("psychiatrist", psychiatristSchema);
