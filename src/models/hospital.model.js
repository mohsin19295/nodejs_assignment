const mongoose = require("mongoose"); 

const hospitalSchema = new mongoose.Schema(
  {
    hospital: { type: String, required: true },
    Psychiatrist_Detail: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "psychiatrist",
      required: true,
    },
    All_Patient_Details: [
      { type: mongoose.Schema.Types.ObjectId, ref: "patient", required: true },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("hospital", hospitalSchema); // hospital => hospitals
