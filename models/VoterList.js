
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const VoterListSchema = new mongoose.Schema({

  uuid: { type: String, default: uuidv4, unique: true }, 

  number: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String,  },
  voterId: { type: String, required: true },
  boothNo: { type: String, required: true },
  comment: { type: String, },

  q1: { type: String, default: "" },
  q2: { type: String, default: "" },
  q3: { type: String, default: "" },
  q4: { type: String, default: "" },

  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  locationName: { type: String, required: true },  

  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: { type: Date, default: Date.now },
});

VoterListSchema.index({ submittedBy: 1 });
      
module.exports = mongoose.model("VoterList", VoterListSchema);